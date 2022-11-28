from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchOfferingsOfferingIDChannelsChannelIDPathParams:
    channel_id: str = field(metadata={'path_param': { 'field_name': 'channelId', 'style': 'simple', 'explode': False }})
    offering_id: str = field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchOfferingsOfferingIDChannelsChannelIDRequest:
    path_params: PatchOfferingsOfferingIDChannelsChannelIDPathParams = field()
    request: shared.Channel = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchOfferingsOfferingIDChannelsChannelIDResponse:
    content_type: str = field()
    status_code: int = field()
    channel_response: Optional[shared.ChannelResponse] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
