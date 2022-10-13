from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class YoutubeMembersListModeEnum(str, Enum):
    LIST_MEMBERS_MODE_UNKNOWN = "listMembersModeUnknown"
    UPDATES = "updates"
    ALL_CURRENT = "all_current"


@dataclass
class YoutubeMembersListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filter_by_member_channel_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filterByMemberChannelId', 'style': 'form', 'explode': True }})
    has_access_to_level: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'hasAccessToLevel', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    mode: Optional[YoutubeMembersListModeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'mode', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    part: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'part', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class YoutubeMembersListSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class YoutubeMembersListRequest:
    query_params: YoutubeMembersListQueryParams = field(default=None)
    security: YoutubeMembersListSecurity = field(default=None)
    

@dataclass
class YoutubeMembersListResponse:
    content_type: str = field(default=None)
    member_list_response: Optional[shared.MemberListResponse] = field(default=None)
    status_code: int = field(default=None)
    
