from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAppsAppIDVersionsVersionPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    version: int = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAppsAppIDVersionsVersionQueryParams:
    developer_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'developerId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAppsAppIDVersionsVersionRequest:
    path_params: GetAppsAppIDVersionsVersionPathParams = field(default=None)
    query_params: GetAppsAppIDVersionsVersionQueryParams = field(default=None)
    

@dataclass
class GetAppsAppIDVersionsVersionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
