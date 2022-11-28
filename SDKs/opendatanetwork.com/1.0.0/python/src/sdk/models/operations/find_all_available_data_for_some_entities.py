from dataclasses import dataclass, field
from typing import Optional


@dataclass
class FindAllAvailableDataForSomeEntitiesQueryParams:
    entity_id: str = field(metadata={'query_param': { 'field_name': 'entity_id', 'style': 'form', 'explode': True }})
    app_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'app_token', 'style': 'form', 'explode': True }})
    

@dataclass
class FindAllAvailableDataForSomeEntitiesHeaders:
    x_app_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-App-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class FindAllAvailableDataForSomeEntitiesRequest:
    headers: FindAllAvailableDataForSomeEntitiesHeaders = field()
    query_params: FindAllAvailableDataForSomeEntitiesQueryParams = field()
    

@dataclass
class FindAllAvailableDataForSomeEntitiesResponse:
    content_type: str = field()
    status_code: int = field()
    
