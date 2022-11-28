from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostDeveloperAccountsDeveloperAccountIDPathParams:
    developer_account_id: str = field(metadata={'path_param': { 'field_name': 'developerAccountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostDeveloperAccountsDeveloperAccountIDQueryParams:
    developer_id: str = field(metadata={'query_param': { 'field_name': 'developerId', 'style': 'form', 'explode': True }})
    custom_data: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class PostDeveloperAccountsDeveloperAccountIDRequest:
    path_params: PostDeveloperAccountsDeveloperAccountIDPathParams = field()
    query_params: PostDeveloperAccountsDeveloperAccountIDQueryParams = field()
    

@dataclass
class PostDeveloperAccountsDeveloperAccountIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
