from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NetworkConfigConnectModeEnum(str, Enum):
    CONNECT_MODE_UNSPECIFIED = "CONNECT_MODE_UNSPECIFIED"
    DIRECT_PEERING = "DIRECT_PEERING"
    PRIVATE_SERVICE_ACCESS = "PRIVATE_SERVICE_ACCESS"

class NetworkConfigModesEnum(str, Enum):
    ADDRESS_MODE_UNSPECIFIED = "ADDRESS_MODE_UNSPECIFIED"
    MODE_IPV4 = "MODE_IPV4"


@dataclass_json
@dataclass
class NetworkConfig:
    r"""NetworkConfig
    Network configuration for the instance.
    """
    
    connect_mode: Optional[NetworkConfigConnectModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectMode') }})
    ip_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddresses') }})
    modes: Optional[List[NetworkConfigModesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modes') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    reserved_ip_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservedIpRange') }})
    

@dataclass_json
@dataclass
class NetworkConfigInput:
    r"""NetworkConfigInput
    Network configuration for the instance.
    """
    
    connect_mode: Optional[NetworkConfigConnectModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectMode') }})
    modes: Optional[List[NetworkConfigModesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modes') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    reserved_ip_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservedIpRange') }})
    
