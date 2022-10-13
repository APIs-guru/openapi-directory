from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class CloudiotProjectsLocationsRegistriesGroupsDevicesListPathParams:
    parent: str = field(default=None, metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    
class CloudiotProjectsLocationsRegistriesGroupsDevicesListGatewayListOptionsGatewayTypeEnum(str, Enum):
    GATEWAY_TYPE_UNSPECIFIED = "GATEWAY_TYPE_UNSPECIFIED"
    GATEWAY = "GATEWAY"
    NON_GATEWAY = "NON_GATEWAY"


@dataclass
class CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    device_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'deviceIds', 'style': 'form', 'explode': True }})
    device_num_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'deviceNumIds', 'style': 'form', 'explode': True }})
    field_mask: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fieldMask', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    gateway_list_options_associations_device_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'gatewayListOptions.associationsDeviceId', 'style': 'form', 'explode': True }})
    gateway_list_options_associations_gateway_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'gatewayListOptions.associationsGatewayId', 'style': 'form', 'explode': True }})
    gateway_list_options_gateway_type: Optional[CloudiotProjectsLocationsRegistriesGroupsDevicesListGatewayListOptionsGatewayTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'gatewayListOptions.gatewayType', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurity:
    option1: Optional[CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CloudiotProjectsLocationsRegistriesGroupsDevicesListRequest:
    path_params: CloudiotProjectsLocationsRegistriesGroupsDevicesListPathParams = field(default=None)
    query_params: CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams = field(default=None)
    security: CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurity = field(default=None)
    

@dataclass
class CloudiotProjectsLocationsRegistriesGroupsDevicesListResponse:
    content_type: str = field(default=None)
    list_devices_response: Optional[shared.ListDevicesResponse] = field(default=None)
    status_code: int = field(default=None)
    
