from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DrivelabelsUsersGetCapabilitiesPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    
class DrivelabelsUsersGetCapabilitiesViewEnum(str, Enum):
    LABEL_VIEW_BASIC = "LABEL_VIEW_BASIC"
    LABEL_VIEW_FULL = "LABEL_VIEW_FULL"


@dataclass
class DrivelabelsUsersGetCapabilitiesQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    language_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'languageCode', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    use_admin_access: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'useAdminAccess', 'style': 'form', 'explode': True }})
    view: Optional[DrivelabelsUsersGetCapabilitiesViewEnum] = field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclass
class DrivelabelsUsersGetCapabilitiesRequest:
    path_params: DrivelabelsUsersGetCapabilitiesPathParams = field()
    query_params: DrivelabelsUsersGetCapabilitiesQueryParams = field()
    

@dataclass
class DrivelabelsUsersGetCapabilitiesResponse:
    content_type: str = field()
    status_code: int = field()
    google_apps_drive_labels_v2beta_user_capabilities: Optional[shared.GoogleAppsDriveLabelsV2betaUserCapabilities] = field(default=None)
    
