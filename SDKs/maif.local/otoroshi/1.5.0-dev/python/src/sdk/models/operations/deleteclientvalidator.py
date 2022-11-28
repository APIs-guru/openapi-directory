from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteClientValidatorPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteClientValidatorSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteClientValidatorRequest:
    path_params: DeleteClientValidatorPathParams = field()
    security: DeleteClientValidatorSecurity = field()
    

@dataclass
class DeleteClientValidatorResponse:
    content_type: str = field()
    status_code: int = field()
    deleted: Optional[shared.Deleted] = field(default=None)
    
