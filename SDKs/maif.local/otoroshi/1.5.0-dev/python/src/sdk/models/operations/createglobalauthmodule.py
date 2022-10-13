from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CreateGlobalAuthModuleSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateGlobalAuthModuleRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateGlobalAuthModuleSecurity = field(default=None)
    

@dataclass
class CreateGlobalAuthModuleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_global_auth_module_200_application_json_one_of: Optional[Any] = field(default=None)
    
