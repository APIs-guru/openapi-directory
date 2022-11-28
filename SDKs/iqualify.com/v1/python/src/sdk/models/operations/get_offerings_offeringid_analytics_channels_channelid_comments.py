from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOfferingsOfferingIDAnalyticsChannelsChannelIDCommentsPathParams:
    channel_id: str = field(metadata={'path_param': { 'field_name': 'channelId', 'style': 'simple', 'explode': False }})
    offering_id: str = field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingsOfferingIDAnalyticsChannelsChannelIDCommentsRequest:
    path_params: GetOfferingsOfferingIDAnalyticsChannelsChannelIDCommentsPathParams = field()
    

@dataclass
class GetOfferingsOfferingIDAnalyticsChannelsChannelIDCommentsResponse:
    content_type: str = field()
    status_code: int = field()
    comments: Optional[List[shared.Comment]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
