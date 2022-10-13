from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteOfferingsOfferingIDChannelsChannelIDLearnersPathParams:
    channel_id: str = field(default=None, metadata={'path_param': { 'field_name': 'channelId', 'style': 'simple', 'explode': False }})
    offering_id: str = field(default=None, metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class DeleteOfferingsOfferingIDChannelsChannelIDLearnersRequestBody:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    

@dataclass
class DeleteOfferingsOfferingIDChannelsChannelIDLearnersRequest:
    path_params: DeleteOfferingsOfferingIDChannelsChannelIDLearnersPathParams = field(default=None)
    request: DeleteOfferingsOfferingIDChannelsChannelIDLearnersRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteOfferingsOfferingIDChannelsChannelIDLearnersResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
