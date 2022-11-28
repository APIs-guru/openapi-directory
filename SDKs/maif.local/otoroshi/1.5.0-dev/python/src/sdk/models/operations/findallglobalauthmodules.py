from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class FindAllGlobalAuthModulesSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FindAllGlobalAuthModulesRequest:
    security: FindAllGlobalAuthModulesSecurity = field()
    

@dataclass
class FindAllGlobalAuthModulesResponse:
    content_type: str = field()
    status_code: int = field()
    find_all_global_auth_modules_200_application_json_oneoves: Optional[List[Any]] = field(default=None)
    
