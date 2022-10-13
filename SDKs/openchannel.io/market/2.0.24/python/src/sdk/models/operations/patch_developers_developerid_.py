from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PatchDevelopersDeveloperIDPathParams:
    developer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'developerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchDevelopersDeveloperIDQueryParams:
    custom_data: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    username: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    

@dataclass
class PatchDevelopersDeveloperIDRequest:
    path_params: PatchDevelopersDeveloperIDPathParams = field(default=None)
    query_params: PatchDevelopersDeveloperIDQueryParams = field(default=None)
    

@dataclass
class PatchDevelopersDeveloperIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
