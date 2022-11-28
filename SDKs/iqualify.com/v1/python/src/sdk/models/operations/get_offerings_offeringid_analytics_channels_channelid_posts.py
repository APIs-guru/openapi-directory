from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOfferingsOfferingIDAnalyticsChannelsChannelIDPostsPathParams:
    channel_id: str = field(metadata={'path_param': { 'field_name': 'channelId', 'style': 'simple', 'explode': False }})
    offering_id: str = field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingsOfferingIDAnalyticsChannelsChannelIDPostsRequest:
    path_params: GetOfferingsOfferingIDAnalyticsChannelsChannelIDPostsPathParams = field()
    

@dataclass
class GetOfferingsOfferingIDAnalyticsChannelsChannelIDPostsResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    http_posts: Optional[List[shared.HTTPPost]] = field(default=None)
    
