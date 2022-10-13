from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateGlobalAuthModulePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateGlobalAuthModuleSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateGlobalAuthModuleRequest:
    path_params: UpdateGlobalAuthModulePathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateGlobalAuthModuleSecurity = field(default=None)
    

@dataclass
class UpdateGlobalAuthModuleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_global_auth_module_200_application_json_one_of: Optional[Any] = field(default=None)
    
