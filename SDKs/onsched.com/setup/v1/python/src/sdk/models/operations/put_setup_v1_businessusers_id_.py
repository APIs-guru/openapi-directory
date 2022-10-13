from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutSetupV1BusinessusersIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSetupV1BusinessusersIDRequests:
    business_user_update_model: Optional[shared.BusinessUserUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    business_user_update_model1: Optional[shared.BusinessUserUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    business_user_update_model2: Optional[shared.BusinessUserUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    business_user_update_model3: Optional[shared.BusinessUserUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutSetupV1BusinessusersIDRequest:
    path_params: PutSetupV1BusinessusersIDPathParams = field(default=None)
    request: Optional[PutSetupV1BusinessusersIDRequests] = field(default=None)
    

@dataclass
class PutSetupV1BusinessusersIDResponse:
    business_user_view_model: Optional[shared.BusinessUserViewModel] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
