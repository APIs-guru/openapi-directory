from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AquifersListQueryParams:
    aquifer_id: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'aquifer_id', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    ordering: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ordering', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class AquifersListRequest:
    query_params: AquifersListQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class AquifersList200ApplicationJSON:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    results: List[shared.Aquifer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class AquifersListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    aquifers_list_200_application_json_object: Optional[AquifersList200ApplicationJSON] = field(default=None)
    
