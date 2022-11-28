from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class DrillersListQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    ordering: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ordering', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class DrillersListRequest:
    query_params: DrillersListQueryParams = field()
    

@dataclass
class DrillersListResponse:
    content_type: str = field()
    status_code: int = field()
    person_lists: Optional[List[shared.PersonList]] = field(default=None)
    
