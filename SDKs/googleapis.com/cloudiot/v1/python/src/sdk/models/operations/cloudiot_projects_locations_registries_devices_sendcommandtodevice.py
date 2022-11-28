from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class CloudiotProjectsLocationsRegistriesDevicesSendCommandToDevicePathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceSecurity:
    option1: Optional[CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceRequest:
    path_params: CloudiotProjectsLocationsRegistriesDevicesSendCommandToDevicePathParams = field()
    query_params: CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceQueryParams = field()
    security: CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceSecurity = field()
    request: Optional[shared.SendCommandToDeviceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceResponse:
    content_type: str = field()
    status_code: int = field()
    send_command_to_device_response: Optional[dict[str, Any]] = field(default=None)
    
