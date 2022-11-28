from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOfferingsOfferingIDChannelsPathParams:
    offering_id: str = field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingsOfferingIDChannelsRequest:
    path_params: GetOfferingsOfferingIDChannelsPathParams = field()
    

@dataclass
class GetOfferingsOfferingIDChannelsResponse:
    content_type: str = field()
    status_code: int = field()
    channel_responses: Optional[List[shared.ChannelResponse]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
