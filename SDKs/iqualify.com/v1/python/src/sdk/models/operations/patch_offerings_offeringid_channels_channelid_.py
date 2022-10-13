from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchOfferingsOfferingIDChannelsChannelIDPathParams:
    channel_id: str = field(default=None, metadata={'path_param': { 'field_name': 'channelId', 'style': 'simple', 'explode': False }})
    offering_id: str = field(default=None, metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchOfferingsOfferingIDChannelsChannelIDRequest:
    path_params: PatchOfferingsOfferingIDChannelsChannelIDPathParams = field(default=None)
    request: shared.Channel = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchOfferingsOfferingIDChannelsChannelIDResponse:
    channel_response: Optional[shared.ChannelResponse] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
