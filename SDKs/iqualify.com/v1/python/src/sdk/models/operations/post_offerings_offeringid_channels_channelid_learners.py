from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostOfferingsOfferingIDChannelsChannelIDLearnersPathParams:
    channel_id: str = field(metadata={'path_param': { 'field_name': 'channelId', 'style': 'simple', 'explode': False }})
    offering_id: str = field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostOfferingsOfferingIDChannelsChannelIDLearnersRequestBody:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    

@dataclass
class PostOfferingsOfferingIDChannelsChannelIDLearnersRequest:
    path_params: PostOfferingsOfferingIDChannelsChannelIDLearnersPathParams = field()
    request: PostOfferingsOfferingIDChannelsChannelIDLearnersRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostOfferingsOfferingIDChannelsChannelIDLearnersResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    
