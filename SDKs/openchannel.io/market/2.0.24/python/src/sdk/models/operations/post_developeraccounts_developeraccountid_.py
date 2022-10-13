from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostDeveloperAccountsDeveloperAccountIDPathParams:
    developer_account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'developerAccountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostDeveloperAccountsDeveloperAccountIDQueryParams:
    custom_data: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    developer_id: str = field(default=None, metadata={'query_param': { 'field_name': 'developerId', 'style': 'form', 'explode': True }})
    email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class PostDeveloperAccountsDeveloperAccountIDRequest:
    path_params: PostDeveloperAccountsDeveloperAccountIDPathParams = field(default=None)
    query_params: PostDeveloperAccountsDeveloperAccountIDQueryParams = field(default=None)
    

@dataclass
class PostDeveloperAccountsDeveloperAccountIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
