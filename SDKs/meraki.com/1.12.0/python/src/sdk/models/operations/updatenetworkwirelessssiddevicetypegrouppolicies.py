from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    GROUP_POLICY = "Group policy"

class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum(str, Enum):
    ANDROID = "Android"
    BLACK_BERRY = "BlackBerry"
    CHROME_OS = "Chrome OS"
    I_PAD = "iPad"
    I_PHONE = "iPhone"
    I_POD = "iPod"
    MAC_OS_X = "Mac OS X"
    WINDOWS = "Windows"
    WINDOWS_PHONE = "Windows Phone"
    B_AND_N_NOOK = "B&N Nook"
    OTHER_OS = "Other OS"


@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies:
    device_policy: UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePolicy') }})
    device_type: UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceType') }})
    group_policy_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupPolicyId') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody:
    device_type_policies: Optional[List[UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceTypePolicies') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclass
class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest:
    path_params: UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams = field()
    request: Optional[UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_wireless_ssid_device_type_group_policies_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
