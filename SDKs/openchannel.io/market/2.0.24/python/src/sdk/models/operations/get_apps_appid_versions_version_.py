from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAppsAppIDVersionsVersionPathParams:
    app_id: str = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    version: int = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAppsAppIDVersionsVersionQueryParams:
    developer_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'developerId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAppsAppIDVersionsVersionRequest:
    path_params: GetAppsAppIDVersionsVersionPathParams = field()
    query_params: GetAppsAppIDVersionsVersionQueryParams = field()
    

@dataclass
class GetAppsAppIDVersionsVersionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
