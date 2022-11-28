from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostOfferingsOfferingIDChannelsPathParams:
    offering_id: str = field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostOfferingsOfferingIDChannelsRequest:
    path_params: PostOfferingsOfferingIDChannelsPathParams = field()
    request: shared.ChannelRequired = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostOfferingsOfferingIDChannelsResponse:
    content_type: str = field()
    status_code: int = field()
    channel_response: Optional[shared.ChannelResponse] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
