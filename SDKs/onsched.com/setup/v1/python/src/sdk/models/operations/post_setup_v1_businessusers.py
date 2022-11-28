from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostSetupV1BusinessusersRequests:
    business_user_input_model: Optional[shared.BusinessUserInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    business_user_input_model1: Optional[shared.BusinessUserInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    business_user_input_model2: Optional[shared.BusinessUserInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    business_user_input_model3: Optional[shared.BusinessUserInputModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostSetupV1BusinessusersRequest:
    request: Optional[PostSetupV1BusinessusersRequests] = field(default=None)
    

@dataclass
class PostSetupV1BusinessusersResponse:
    content_type: str = field()
    status_code: int = field()
    business_user_view_model: Optional[shared.BusinessUserViewModel] = field(default=None)
    
