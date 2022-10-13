from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class ChromemanagementCustomersReportsFindInstalledAppDevicesPathParams:
    customer: str = field(default=None, metadata={'path_param': { 'field_name': 'customer', 'style': 'simple', 'explode': False }})
    
class ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnum(str, Enum):
    APP_TYPE_UNSPECIFIED = "APP_TYPE_UNSPECIFIED"
    EXTENSION = "EXTENSION"
    APP = "APP"
    THEME = "THEME"
    HOSTED_APP = "HOSTED_APP"
    ANDROID_APP = "ANDROID_APP"


@dataclass
class ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    app_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'appId', 'style': 'form', 'explode': True }})
    app_type: Optional[ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'appType', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    order_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    org_unit_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'orgUnitId', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class ChromemanagementCustomersReportsFindInstalledAppDevicesSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ChromemanagementCustomersReportsFindInstalledAppDevicesRequest:
    path_params: ChromemanagementCustomersReportsFindInstalledAppDevicesPathParams = field(default=None)
    query_params: ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams = field(default=None)
    security: ChromemanagementCustomersReportsFindInstalledAppDevicesSecurity = field(default=None)
    

@dataclass
class ChromemanagementCustomersReportsFindInstalledAppDevicesResponse:
    content_type: str = field(default=None)
    google_chrome_management_v1_find_installed_app_devices_response: Optional[shared.GoogleChromeManagementV1FindInstalledAppDevicesResponse] = field(default=None)
    status_code: int = field(default=None)
    
