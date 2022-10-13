from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class MirrorTimelineListOrderByEnum(str, Enum):
    DISPLAY_TIME = "displayTime"
    WRITE_TIME = "writeTime"


@dataclass
class MirrorTimelineListQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    bundle_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'bundleId', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    include_deleted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeDeleted', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    order_by: Optional[MirrorTimelineListOrderByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pinned_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'pinnedOnly', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    source_item_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sourceItemId', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class MirrorTimelineListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class MirrorTimelineListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class MirrorTimelineListSecurity:
    option1: Optional[MirrorTimelineListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[MirrorTimelineListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class MirrorTimelineListRequest:
    query_params: MirrorTimelineListQueryParams = field(default=None)
    security: MirrorTimelineListSecurity = field(default=None)
    

@dataclass
class MirrorTimelineListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
