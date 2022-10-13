from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class DrivelabelsLabelsListMinimumRoleEnum(str, Enum):
    LABEL_ROLE_UNSPECIFIED = "LABEL_ROLE_UNSPECIFIED"
    READER = "READER"
    APPLIER = "APPLIER"
    ORGANIZER = "ORGANIZER"
    EDITOR = "EDITOR"

class DrivelabelsLabelsListViewEnum(str, Enum):
    LABEL_VIEW_BASIC = "LABEL_VIEW_BASIC"
    LABEL_VIEW_FULL = "LABEL_VIEW_FULL"


@dataclass
class DrivelabelsLabelsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    language_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'languageCode', 'style': 'form', 'explode': True }})
    minimum_role: Optional[DrivelabelsLabelsListMinimumRoleEnum] = field(default=None, metadata={'query_param': { 'field_name': 'minimumRole', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    published_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'publishedOnly', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    use_admin_access: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'useAdminAccess', 'style': 'form', 'explode': True }})
    view: Optional[DrivelabelsLabelsListViewEnum] = field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclass
class DrivelabelsLabelsListRequest:
    query_params: DrivelabelsLabelsListQueryParams = field(default=None)
    

@dataclass
class DrivelabelsLabelsListResponse:
    content_type: str = field(default=None)
    google_apps_drive_labels_v2_list_labels_response: Optional[shared.GoogleAppsDriveLabelsV2ListLabelsResponse] = field(default=None)
    status_code: int = field(default=None)
    
