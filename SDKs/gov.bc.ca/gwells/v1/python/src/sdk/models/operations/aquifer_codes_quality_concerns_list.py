from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AquiferCodesQualityConcernsListQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class AquiferCodesQualityConcernsList200ApplicationJSON:
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: List[shared.QualityConcern] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclass
class AquiferCodesQualityConcernsListRequest:
    query_params: AquiferCodesQualityConcernsListQueryParams = field()
    

@dataclass
class AquiferCodesQualityConcernsListResponse:
    content_type: str = field()
    status_code: int = field()
    aquifer_codes_quality_concerns_list_200_application_json_object: Optional[AquiferCodesQualityConcernsList200ApplicationJSON] = field(default=None)
    
