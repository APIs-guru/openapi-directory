from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class FindAllGlobalAuthModulesSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FindAllGlobalAuthModulesRequest:
    security: FindAllGlobalAuthModulesSecurity = field(default=None)
    

@dataclass
class FindAllGlobalAuthModulesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    find_all_global_auth_modules_200_application_json_oneoves: Optional[List[Any]] = field(default=None)
    
