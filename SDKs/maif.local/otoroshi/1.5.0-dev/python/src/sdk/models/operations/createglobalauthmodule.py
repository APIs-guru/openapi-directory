from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CreateGlobalAuthModuleSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateGlobalAuthModuleRequest:
    security: CreateGlobalAuthModuleSecurity = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateGlobalAuthModuleResponse:
    content_type: str = field()
    status_code: int = field()
    create_global_auth_module_200_application_json_one_of: Optional[Any] = field(default=None)
    
