from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUsersUserEmailOfferingsPathParams:
    user_email: str = field(default=None, metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersUserEmailOfferingsRequest:
    path_params: GetUsersUserEmailOfferingsPathParams = field(default=None)
    

@dataclass
class GetUsersUserEmailOfferingsResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    offering_metadata_responses: Optional[List[shared.OfferingMetadataResponse]] = field(default=None)
    status_code: int = field(default=None)
    
