from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class DrillersNamesListQueryParams:
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class DrillersNamesListRequest:
    query_params: DrillersNamesListQueryParams = field()
    

@dataclass
class DrillersNamesListResponse:
    content_type: str = field()
    status_code: int = field()
    person_names: Optional[List[shared.PersonName]] = field(default=None)
    
