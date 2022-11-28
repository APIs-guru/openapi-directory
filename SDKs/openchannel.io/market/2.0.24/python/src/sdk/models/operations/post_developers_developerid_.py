from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostDevelopersDeveloperIDPathParams:
    developer_id: str = field(metadata={'path_param': { 'field_name': 'developerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostDevelopersDeveloperIDQueryParams:
    custom_data: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    username: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    

@dataclass
class PostDevelopersDeveloperIDRequest:
    path_params: PostDevelopersDeveloperIDPathParams = field()
    query_params: PostDevelopersDeveloperIDQueryParams = field()
    

@dataclass
class PostDevelopersDeveloperIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
