from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostOfferingsOfferingIDChannelsChannelIDLearnersPathParams:
    channel_id: str = field(default=None, metadata={'path_param': { 'field_name': 'channelId', 'style': 'simple', 'explode': False }})
    offering_id: str = field(default=None, metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostOfferingsOfferingIDChannelsChannelIDLearnersRequestBody:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    

@dataclass
class PostOfferingsOfferingIDChannelsChannelIDLearnersRequest:
    path_params: PostOfferingsOfferingIDChannelsChannelIDLearnersPathParams = field(default=None)
    request: PostOfferingsOfferingIDChannelsChannelIDLearnersRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostOfferingsOfferingIDChannelsChannelIDLearnersResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
