from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDatePathParams:
    customer: str = field(metadata={'path_param': { 'field_name': 'customer', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_aue_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxAueDate', 'style': 'form', 'explode': True }})
    min_aue_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'minAueDate', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    org_unit_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'orgUnitId', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateRequest:
    path_params: ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDatePathParams = field()
    query_params: ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateQueryParams = field()
    security: ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateSecurity = field()
    

@dataclass
class ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateResponse:
    content_type: str = field()
    status_code: int = field()
    google_chrome_management_v1_count_chrome_devices_reaching_auto_expiration_date_response: Optional[shared.GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse] = field(default=None)
    
