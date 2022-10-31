from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CreateAMapQueryParams:
    app_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'app_token', 'style': 'form', 'explode': True }})
    constraint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'constraint', 'style': 'form', 'explode': True }})
    entity_id: str = field(default=None, metadata={'query_param': { 'field_name': 'entity_id', 'style': 'form', 'explode': True }})
    variable: str = field(default=None, metadata={'query_param': { 'field_name': 'variable', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateAMapHeaders:
    x_app_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-App-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAMapRequest:
    query_params: CreateAMapQueryParams = field(default=None)
    headers: CreateAMapHeaders = field(default=None)
    

@dataclass
class CreateAMapResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
