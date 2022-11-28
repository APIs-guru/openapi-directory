from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkSwitchAlternateManagementInterfacePathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum(str, Enum):
    RADIUS = "radius"
    SNMP = "snmp"
    SYSLOG = "syslog"


@dataclass_json
@dataclass
class UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches:
    alternate_management_ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternateManagementIp') }})
    serial: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serial') }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchAlternateManagementInterfaceRequestBody:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    protocols: Optional[List[UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocols') }})
    switches: Optional[List[UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('switches') }})
    vlan_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlanId') }})
    

@dataclass
class UpdateNetworkSwitchAlternateManagementInterfaceRequest:
    path_params: UpdateNetworkSwitchAlternateManagementInterfacePathParams = field()
    request: Optional[UpdateNetworkSwitchAlternateManagementInterfaceRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSwitchAlternateManagementInterfaceResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_switch_alternate_management_interface_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
