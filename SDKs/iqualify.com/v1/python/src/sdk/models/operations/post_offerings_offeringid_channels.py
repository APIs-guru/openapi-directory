from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostOfferingsOfferingIDChannelsPathParams:
    offering_id: str = field(default=None, metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostOfferingsOfferingIDChannelsRequest:
    path_params: PostOfferingsOfferingIDChannelsPathParams = field(default=None)
    request: shared.ChannelRequired = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostOfferingsOfferingIDChannelsResponse:
    channel_response: Optional[shared.ChannelResponse] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
