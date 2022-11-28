from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CreateAMapQueryParams:
    entity_id: str = field(metadata={'query_param': { 'field_name': 'entity_id', 'style': 'form', 'explode': True }})
    variable: str = field(metadata={'query_param': { 'field_name': 'variable', 'style': 'form', 'explode': True }})
    app_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'app_token', 'style': 'form', 'explode': True }})
    constraint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'constraint', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateAMapHeaders:
    x_app_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-App-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAMapRequest:
    headers: CreateAMapHeaders = field()
    query_params: CreateAMapQueryParams = field()
    

@dataclass
class CreateAMapResponse:
    content_type: str = field()
    status_code: int = field()
    
