from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ExtrasRecentActivityListQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'user', 'style': 'form', 'explode': True }})
    username: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    

@dataclass
class ExtrasRecentActivityListRequest:
    query_params: ExtrasRecentActivityListQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ExtrasRecentActivityList200ApplicationJSON:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    results: List[shared.UserAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class ExtrasRecentActivityListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    extras_recent_activity_list_200_application_json_object: Optional[ExtrasRecentActivityList200ApplicationJSON] = field(default=None)
    
