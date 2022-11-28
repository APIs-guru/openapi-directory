from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUsersUserEmailOfferingsPathParams:
    user_email: str = field(metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersUserEmailOfferingsRequest:
    path_params: GetUsersUserEmailOfferingsPathParams = field()
    

@dataclass
class GetUsersUserEmailOfferingsResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    offering_metadata_responses: Optional[List[shared.OfferingMetadataResponse]] = field(default=None)
    
