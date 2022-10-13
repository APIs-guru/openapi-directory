from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class DfareportingChangeLogsListPathParams:
    profile_id: str = field(default=None, metadata={'path_param': { 'field_name': 'profileId', 'style': 'simple', 'explode': False }})
    
class DfareportingChangeLogsListActionEnum(str, Enum):
    ACTION_CREATE = "ACTION_CREATE"
    ACTION_UPDATE = "ACTION_UPDATE"
    ACTION_DELETE = "ACTION_DELETE"
    ACTION_ENABLE = "ACTION_ENABLE"
    ACTION_DISABLE = "ACTION_DISABLE"
    ACTION_ADD = "ACTION_ADD"
    ACTION_REMOVE = "ACTION_REMOVE"
    ACTION_MARK_AS_DEFAULT = "ACTION_MARK_AS_DEFAULT"
    ACTION_ASSOCIATE = "ACTION_ASSOCIATE"
    ACTION_ASSIGN = "ACTION_ASSIGN"
    ACTION_UNASSIGN = "ACTION_UNASSIGN"
    ACTION_SEND = "ACTION_SEND"
    ACTION_LINK = "ACTION_LINK"
    ACTION_UNLINK = "ACTION_UNLINK"
    ACTION_PUSH = "ACTION_PUSH"
    ACTION_EMAIL_TAGS = "ACTION_EMAIL_TAGS"
    ACTION_SHARE = "ACTION_SHARE"

class DfareportingChangeLogsListObjectTypeEnum(str, Enum):
    OBJECT_ADVERTISER = "OBJECT_ADVERTISER"
    OBJECT_FLOODLIGHT_CONFIGURATION = "OBJECT_FLOODLIGHT_CONFIGURATION"
    OBJECT_AD = "OBJECT_AD"
    OBJECT_FLOODLIGHT_ACTVITY = "OBJECT_FLOODLIGHT_ACTVITY"
    OBJECT_CAMPAIGN = "OBJECT_CAMPAIGN"
    OBJECT_FLOODLIGHT_ACTIVITY_GROUP = "OBJECT_FLOODLIGHT_ACTIVITY_GROUP"
    OBJECT_CREATIVE = "OBJECT_CREATIVE"
    OBJECT_PLACEMENT = "OBJECT_PLACEMENT"
    OBJECT_DFA_SITE = "OBJECT_DFA_SITE"
    OBJECT_USER_ROLE = "OBJECT_USER_ROLE"
    OBJECT_USER_PROFILE = "OBJECT_USER_PROFILE"
    OBJECT_ADVERTISER_GROUP = "OBJECT_ADVERTISER_GROUP"
    OBJECT_ACCOUNT = "OBJECT_ACCOUNT"
    OBJECT_SUBACCOUNT = "OBJECT_SUBACCOUNT"
    OBJECT_RICHMEDIA_CREATIVE = "OBJECT_RICHMEDIA_CREATIVE"
    OBJECT_INSTREAM_CREATIVE = "OBJECT_INSTREAM_CREATIVE"
    OBJECT_MEDIA_ORDER = "OBJECT_MEDIA_ORDER"
    OBJECT_CONTENT_CATEGORY = "OBJECT_CONTENT_CATEGORY"
    OBJECT_PLACEMENT_STRATEGY = "OBJECT_PLACEMENT_STRATEGY"
    OBJECT_SD_SITE = "OBJECT_SD_SITE"
    OBJECT_SIZE = "OBJECT_SIZE"
    OBJECT_CREATIVE_GROUP = "OBJECT_CREATIVE_GROUP"
    OBJECT_CREATIVE_ASSET = "OBJECT_CREATIVE_ASSET"
    OBJECT_USER_PROFILE_FILTER = "OBJECT_USER_PROFILE_FILTER"
    OBJECT_LANDING_PAGE = "OBJECT_LANDING_PAGE"
    OBJECT_CREATIVE_FIELD = "OBJECT_CREATIVE_FIELD"
    OBJECT_REMARKETING_LIST = "OBJECT_REMARKETING_LIST"
    OBJECT_PROVIDED_LIST_CLIENT = "OBJECT_PROVIDED_LIST_CLIENT"
    OBJECT_EVENT_TAG = "OBJECT_EVENT_TAG"
    OBJECT_CREATIVE_BUNDLE = "OBJECT_CREATIVE_BUNDLE"
    OBJECT_BILLING_ACCOUNT_GROUP = "OBJECT_BILLING_ACCOUNT_GROUP"
    OBJECT_BILLING_FEATURE = "OBJECT_BILLING_FEATURE"
    OBJECT_RATE_CARD = "OBJECT_RATE_CARD"
    OBJECT_ACCOUNT_BILLING_FEATURE = "OBJECT_ACCOUNT_BILLING_FEATURE"
    OBJECT_BILLING_MINIMUM_FEE = "OBJECT_BILLING_MINIMUM_FEE"
    OBJECT_BILLING_PROFILE = "OBJECT_BILLING_PROFILE"
    OBJECT_PLAYSTORE_LINK = "OBJECT_PLAYSTORE_LINK"
    OBJECT_TARGETING_TEMPLATE = "OBJECT_TARGETING_TEMPLATE"
    OBJECT_SEARCH_LIFT_STUDY = "OBJECT_SEARCH_LIFT_STUDY"
    OBJECT_FLOODLIGHT_DV360_LINK = "OBJECT_FLOODLIGHT_DV360_LINK"


@dataclass
class DfareportingChangeLogsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    action: Optional[DfareportingChangeLogsListActionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'action', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_change_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxChangeTime', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    min_change_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'minChangeTime', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    object_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'objectIds', 'style': 'form', 'explode': True }})
    object_type: Optional[DfareportingChangeLogsListObjectTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'objectType', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    search_string: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchString', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    user_profile_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'userProfileIds', 'style': 'form', 'explode': True }})
    

@dataclass
class DfareportingChangeLogsListSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DfareportingChangeLogsListRequest:
    path_params: DfareportingChangeLogsListPathParams = field(default=None)
    query_params: DfareportingChangeLogsListQueryParams = field(default=None)
    security: DfareportingChangeLogsListSecurity = field(default=None)
    

@dataclass
class DfareportingChangeLogsListResponse:
    change_logs_list_response: Optional[shared.ChangeLogsListResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
