from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOfferingsOfferingIDAnalyticsChannelsChannelIDCommentsPathParams:
    channel_id: str = field(default=None, metadata={'path_param': { 'field_name': 'channelId', 'style': 'simple', 'explode': False }})
    offering_id: str = field(default=None, metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingsOfferingIDAnalyticsChannelsChannelIDCommentsRequest:
    path_params: GetOfferingsOfferingIDAnalyticsChannelsChannelIDCommentsPathParams = field(default=None)
    

@dataclass
class GetOfferingsOfferingIDAnalyticsChannelsChannelIDCommentsResponse:
    comments: Optional[List[shared.Comment]] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
