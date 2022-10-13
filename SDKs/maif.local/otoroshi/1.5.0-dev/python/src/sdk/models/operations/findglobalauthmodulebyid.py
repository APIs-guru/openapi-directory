from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class FindGlobalAuthModuleByIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class FindGlobalAuthModuleByIDSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FindGlobalAuthModuleByIDRequest:
    path_params: FindGlobalAuthModuleByIDPathParams = field(default=None)
    security: FindGlobalAuthModuleByIDSecurity = field(default=None)
    

@dataclass
class FindGlobalAuthModuleByIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    find_global_auth_module_by_id_200_application_json_one_of: Optional[Any] = field(default=None)
    
