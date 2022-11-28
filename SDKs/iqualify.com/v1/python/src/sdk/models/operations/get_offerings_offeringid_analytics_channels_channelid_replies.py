from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOfferingsOfferingIDAnalyticsChannelsChannelIDRepliesPathParams:
    channel_id: str = field(metadata={'path_param': { 'field_name': 'channelId', 'style': 'simple', 'explode': False }})
    offering_id: str = field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingsOfferingIDAnalyticsChannelsChannelIDRepliesRequest:
    path_params: GetOfferingsOfferingIDAnalyticsChannelsChannelIDRepliesPathParams = field()
    

@dataclass
class GetOfferingsOfferingIDAnalyticsChannelsChannelIDRepliesResponse:
    content_type: str = field()
    status_code: int = field()
    comments: Optional[List[shared.Comment]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
