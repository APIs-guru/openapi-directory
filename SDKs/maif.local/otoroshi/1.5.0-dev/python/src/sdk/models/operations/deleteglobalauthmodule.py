from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteGlobalAuthModulePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteGlobalAuthModuleSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteGlobalAuthModuleRequest:
    path_params: DeleteGlobalAuthModulePathParams = field()
    security: DeleteGlobalAuthModuleSecurity = field()
    

@dataclass
class DeleteGlobalAuthModuleResponse:
    content_type: str = field()
    status_code: int = field()
    deleted: Optional[shared.Deleted] = field(default=None)
    
