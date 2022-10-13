from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AquiferCodesProductivityListQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class AquiferCodesProductivityListRequest:
    query_params: AquiferCodesProductivityListQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class AquiferCodesProductivityList200ApplicationJSON:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    results: List[shared.AquiferProductivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class AquiferCodesProductivityListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    aquifer_codes_productivity_list_200_application_json_object: Optional[AquiferCodesProductivityList200ApplicationJSON] = field(default=None)
    
