from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class ProvisionNetworkClientsPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ProvisionNetworkClientsRequestBodyClients:
    mac: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mac' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
class ProvisionNetworkClientsRequestBodyDevicePolicyEnum(str, Enum):
    GROUP_POLICY = "Group policy"
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    PER_CONNECTION = "Per connection"
    NORMAL = "Normal"

class ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    NORMAL = "Normal"


@dataclass_json
@dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance:
    device_policy: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devicePolicy' }})
    
class ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    NORMAL = "Normal"
    GROUP_POLICY = "Group policy"


@dataclass_json
@dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySsid0:
    device_policy: ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devicePolicy' }})
    group_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupPolicyId' }})
    
class ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    NORMAL = "Normal"
    GROUP_POLICY = "Group policy"


@dataclass_json
@dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySsid1:
    device_policy: ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devicePolicy' }})
    group_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupPolicyId' }})
    
class ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    NORMAL = "Normal"
    GROUP_POLICY = "Group policy"


@dataclass_json
@dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySsid10:
    device_policy: ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devicePolicy' }})
    group_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupPolicyId' }})
    
class ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    NORMAL = "Normal"
    GROUP_POLICY = "Group policy"


@dataclass_json
@dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySsid11:
    device_policy: ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devicePolicy' }})
    group_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupPolicyId' }})
    
class ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    NORMAL = "Normal"
    GROUP_POLICY = "Group policy"


@dataclass_json
@dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySsid12:
    device_policy: ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devicePolicy' }})
    group_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupPolicyId' }})
    
class ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    NORMAL = "Normal"
    GROUP_POLICY = "Group policy"


@dataclass_json
@dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySsid13:
    device_policy: ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devicePolicy' }})
    group_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupPolicyId' }})
    
class ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    NORMAL = "Normal"
    GROUP_POLICY = "Group policy"


@dataclass_json
@dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySsid14:
    device_policy: ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devicePolicy' }})
    group_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupPolicyId' }})
    
class ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    NORMAL = "Normal"
    GROUP_POLICY = "Group policy"


@dataclass_json
@dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySsid2:
    device_policy: ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devicePolicy' }})
    group_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupPolicyId' }})
    
class ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    NORMAL = "Normal"
    GROUP_POLICY = "Group policy"


@dataclass_json
@dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySsid3:
    device_policy: ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devicePolicy' }})
    group_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupPolicyId' }})
    
class ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    NORMAL = "Normal"
    GROUP_POLICY = "Group policy"


@dataclass_json
@dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySsid4:
    device_policy: ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devicePolicy' }})
    group_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupPolicyId' }})
    
class ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    NORMAL = "Normal"
    GROUP_POLICY = "Group policy"


@dataclass_json
@dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySsid5:
    device_policy: ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devicePolicy' }})
    group_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupPolicyId' }})
    
class ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    NORMAL = "Normal"
    GROUP_POLICY = "Group policy"


@dataclass_json
@dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySsid6:
    device_policy: ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devicePolicy' }})
    group_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupPolicyId' }})
    
class ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    NORMAL = "Normal"
    GROUP_POLICY = "Group policy"


@dataclass_json
@dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySsid7:
    device_policy: ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devicePolicy' }})
    group_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupPolicyId' }})
    
class ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    NORMAL = "Normal"
    GROUP_POLICY = "Group policy"


@dataclass_json
@dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySsid8:
    device_policy: ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devicePolicy' }})
    group_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupPolicyId' }})
    
class ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    NORMAL = "Normal"
    GROUP_POLICY = "Group policy"


@dataclass_json
@dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySsid9:
    device_policy: ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devicePolicy' }})
    group_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupPolicyId' }})
    

@dataclass_json
@dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySsid:
    zero: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySsid0] = field(default=None, metadata={'dataclasses_json': { 'field_name': '0' }})
    one: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySsid1] = field(default=None, metadata={'dataclasses_json': { 'field_name': '1' }})
    ten: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySsid10] = field(default=None, metadata={'dataclasses_json': { 'field_name': '10' }})
    eleven: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySsid11] = field(default=None, metadata={'dataclasses_json': { 'field_name': '11' }})
    twelve: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySsid12] = field(default=None, metadata={'dataclasses_json': { 'field_name': '12' }})
    thirteen: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySsid13] = field(default=None, metadata={'dataclasses_json': { 'field_name': '13' }})
    fourteen: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySsid14] = field(default=None, metadata={'dataclasses_json': { 'field_name': '14' }})
    two: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySsid2] = field(default=None, metadata={'dataclasses_json': { 'field_name': '2' }})
    three: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySsid3] = field(default=None, metadata={'dataclasses_json': { 'field_name': '3' }})
    four: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySsid4] = field(default=None, metadata={'dataclasses_json': { 'field_name': '4' }})
    five: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySsid5] = field(default=None, metadata={'dataclasses_json': { 'field_name': '5' }})
    six: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySsid6] = field(default=None, metadata={'dataclasses_json': { 'field_name': '6' }})
    seven: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySsid7] = field(default=None, metadata={'dataclasses_json': { 'field_name': '7' }})
    eight: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySsid8] = field(default=None, metadata={'dataclasses_json': { 'field_name': '8' }})
    nine: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySsid9] = field(default=None, metadata={'dataclasses_json': { 'field_name': '9' }})
    

@dataclass_json
@dataclass
class ProvisionNetworkClientsRequestBody:
    clients: List[ProvisionNetworkClientsRequestBodyClients] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clients' }})
    device_policy: ProvisionNetworkClientsRequestBodyDevicePolicyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devicePolicy' }})
    group_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupPolicyId' }})
    policies_by_security_appliance: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policiesBySecurityAppliance' }})
    policies_by_ssid: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySsid] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policiesBySsid' }})
    

@dataclass
class ProvisionNetworkClientsRequest:
    path_params: ProvisionNetworkClientsPathParams = field(default=None)
    request: ProvisionNetworkClientsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ProvisionNetworkClientsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    provision_network_clients_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
