from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PostUsersUserEmailOfferingsPathParams:
    user_email: str = field(metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostUsersUserEmailOfferingsRequest:
    path_params: PostUsersUserEmailOfferingsPathParams = field()
    request: List[str] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostUsersUserEmailOfferingsResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    offering_metadata_responses: Optional[List[shared.OfferingMetadataResponse]] = field(default=None)
    
