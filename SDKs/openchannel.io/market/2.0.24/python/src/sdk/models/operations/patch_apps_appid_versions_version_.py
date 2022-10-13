from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PatchAppsAppIDVersionsVersionPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    version: str = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchAppsAppIDVersionsVersionQueryParams:
    access: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access', 'style': 'form', 'explode': True }})
    allow: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'allow', 'style': 'form', 'explode': True }})
    approval_required: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'approvalRequired', 'style': 'form', 'explode': True }})
    attributes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'attributes', 'style': 'form', 'explode': True }})
    custom_data: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    developer_id: str = field(default=None, metadata={'query_param': { 'field_name': 'developerId', 'style': 'form', 'explode': True }})
    model: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'model', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    restrict: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'restrict', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class PatchAppsAppIDVersionsVersionRequest:
    path_params: PatchAppsAppIDVersionsVersionPathParams = field(default=None)
    query_params: PatchAppsAppIDVersionsVersionQueryParams = field(default=None)
    

@dataclass
class PatchAppsAppIDVersionsVersionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
