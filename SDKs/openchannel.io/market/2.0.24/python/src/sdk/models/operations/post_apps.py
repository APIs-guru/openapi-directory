from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostAppsQueryParams:
    access: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access', 'style': 'form', 'explode': True }})
    allow: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'allow', 'style': 'form', 'explode': True }})
    attributes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'attributes', 'style': 'form', 'explode': True }})
    custom_data: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    developer_id: str = field(default=None, metadata={'query_param': { 'field_name': 'developerId', 'style': 'form', 'explode': True }})
    model: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'model', 'style': 'form', 'explode': True }})
    name: str = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    restrict: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'restrict', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class PostAppsRequest:
    query_params: PostAppsQueryParams = field(default=None)
    

@dataclass
class PostAppsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
