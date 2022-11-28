from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class YoutubeLiveBroadcastsListBroadcastStatusEnum(str, Enum):
    BROADCAST_STATUS_FILTER_UNSPECIFIED = "broadcastStatusFilterUnspecified"
    ALL = "all"
    ACTIVE = "active"
    UPCOMING = "upcoming"
    COMPLETED = "completed"

class YoutubeLiveBroadcastsListBroadcastTypeEnum(str, Enum):
    BROADCAST_TYPE_FILTER_UNSPECIFIED = "broadcastTypeFilterUnspecified"
    ALL = "all"
    EVENT = "event"
    PERSISTENT = "persistent"


@dataclass
class YoutubeLiveBroadcastsListQueryParams:
    part: List[str] = field(metadata={'query_param': { 'field_name': 'part', 'style': 'form', 'explode': True }})
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    broadcast_status: Optional[YoutubeLiveBroadcastsListBroadcastStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'broadcastStatus', 'style': 'form', 'explode': True }})
    broadcast_type: Optional[YoutubeLiveBroadcastsListBroadcastTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'broadcastType', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    mine: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'mine', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    on_behalf_of_content_owner: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'onBehalfOfContentOwner', 'style': 'form', 'explode': True }})
    on_behalf_of_content_owner_channel: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'onBehalfOfContentOwnerChannel', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class YoutubeLiveBroadcastsListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class YoutubeLiveBroadcastsListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class YoutubeLiveBroadcastsListSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class YoutubeLiveBroadcastsListSecurity:
    option1: Optional[YoutubeLiveBroadcastsListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[YoutubeLiveBroadcastsListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[YoutubeLiveBroadcastsListSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class YoutubeLiveBroadcastsListRequest:
    query_params: YoutubeLiveBroadcastsListQueryParams = field()
    security: YoutubeLiveBroadcastsListSecurity = field()
    

@dataclass
class YoutubeLiveBroadcastsListResponse:
    content_type: str = field()
    status_code: int = field()
    live_broadcast_list_response: Optional[shared.LiveBroadcastListResponse] = field(default=None)
    
