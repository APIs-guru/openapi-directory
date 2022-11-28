from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class CloudiotProjectsLocationsRegistriesBindDeviceToGatewayPathParams:
    parent: str = field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclass
class CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams:
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
class CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity:
    option1: Optional[CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest:
    path_params: CloudiotProjectsLocationsRegistriesBindDeviceToGatewayPathParams = field()
    query_params: CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams = field()
    security: CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity = field()
    request: Optional[shared.BindDeviceToGatewayRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CloudiotProjectsLocationsRegistriesBindDeviceToGatewayResponse:
    content_type: str = field()
    status_code: int = field()
    bind_device_to_gateway_response: Optional[dict[str, Any]] = field(default=None)
    
