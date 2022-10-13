from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1BusinessusersIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1BusinessusersIDRequest:
    path_params: GetSetupV1BusinessusersIDPathParams = field(default=None)
    

@dataclass
class GetSetupV1BusinessusersIDResponse:
    business_user_view_model: Optional[shared.BusinessUserViewModel] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
