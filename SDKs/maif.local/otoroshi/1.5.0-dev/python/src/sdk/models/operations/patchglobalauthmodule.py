from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class PatchGlobalAuthModulePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchGlobalAuthModuleSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PatchGlobalAuthModuleRequest:
    path_params: PatchGlobalAuthModulePathParams = field()
    security: PatchGlobalAuthModuleSecurity = field()
    request: Optional[List[shared.Patch]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchGlobalAuthModuleResponse:
    content_type: str = field()
    status_code: int = field()
    patch_global_auth_module_200_application_json_one_of: Optional[Any] = field(default=None)
    
