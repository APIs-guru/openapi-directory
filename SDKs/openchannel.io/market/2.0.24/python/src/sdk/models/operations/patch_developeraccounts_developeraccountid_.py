from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PatchDeveloperAccountsDeveloperAccountIDPathParams:
    developer_account_id: str = field(metadata={'path_param': { 'field_name': 'developerAccountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchDeveloperAccountsDeveloperAccountIDQueryParams:
    developer_id: str = field(metadata={'query_param': { 'field_name': 'developerId', 'style': 'form', 'explode': True }})
    custom_data: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class PatchDeveloperAccountsDeveloperAccountIDRequest:
    path_params: PatchDeveloperAccountsDeveloperAccountIDPathParams = field()
    query_params: PatchDeveloperAccountsDeveloperAccountIDQueryParams = field()
    

@dataclass
class PatchDeveloperAccountsDeveloperAccountIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
