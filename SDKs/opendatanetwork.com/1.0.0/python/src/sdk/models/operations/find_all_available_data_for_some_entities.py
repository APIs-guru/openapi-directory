from dataclasses import dataclass, field
from typing import Optional


@dataclass
class FindAllAvailableDataForSomeEntitiesQueryParams:
    app_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'app_token', 'style': 'form', 'explode': True }})
    entity_id: str = field(default=None, metadata={'query_param': { 'field_name': 'entity_id', 'style': 'form', 'explode': True }})
    

@dataclass
class FindAllAvailableDataForSomeEntitiesHeaders:
    x_app_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-App-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class FindAllAvailableDataForSomeEntitiesRequest:
    query_params: FindAllAvailableDataForSomeEntitiesQueryParams = field(default=None)
    headers: FindAllAvailableDataForSomeEntitiesHeaders = field(default=None)
    

@dataclass
class FindAllAvailableDataForSomeEntitiesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
