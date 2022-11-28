from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetEntitiesQueryParams:
    app_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'app_token', 'style': 'form', 'explode': True }})
    entity_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'entity_id', 'style': 'form', 'explode': True }})
    entity_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'entity_name', 'style': 'form', 'explode': True }})
    entity_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'entity_type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEntitiesHeaders:
    x_app_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-App-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEntitiesRequest:
    headers: GetEntitiesHeaders = field()
    query_params: GetEntitiesQueryParams = field()
    

@dataclass
class GetEntitiesResponse:
    content_type: str = field()
    status_code: int = field()
    
