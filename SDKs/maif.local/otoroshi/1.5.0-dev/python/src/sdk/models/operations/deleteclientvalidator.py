from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteClientValidatorPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteClientValidatorSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteClientValidatorRequest:
    path_params: DeleteClientValidatorPathParams = field(default=None)
    security: DeleteClientValidatorSecurity = field(default=None)
    

@dataclass
class DeleteClientValidatorResponse:
    content_type: str = field(default=None)
    deleted: Optional[shared.Deleted] = field(default=None)
    status_code: int = field(default=None)
    
