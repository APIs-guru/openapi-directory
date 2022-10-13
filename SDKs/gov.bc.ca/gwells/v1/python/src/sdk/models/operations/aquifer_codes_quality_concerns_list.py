from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AquiferCodesQualityConcernsListQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class AquiferCodesQualityConcernsListRequest:
    query_params: AquiferCodesQualityConcernsListQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class AquiferCodesQualityConcernsList200ApplicationJSON:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    results: List[shared.QualityConcern] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class AquiferCodesQualityConcernsListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    aquifer_codes_quality_concerns_list_200_application_json_object: Optional[AquiferCodesQualityConcernsList200ApplicationJSON] = field(default=None)
    
