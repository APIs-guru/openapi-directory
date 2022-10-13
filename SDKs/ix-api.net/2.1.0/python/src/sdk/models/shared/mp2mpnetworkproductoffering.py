from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class Mp2MpNetworkProductOfferingProviderVlansEnum(str, Enum):
    SINGLE = "single"
    MULTI = "multi"

class Mp2MpNetworkProductOfferingResourceTypeEnum(str, Enum):
    CONNECTION = "connection"
    DEMARC = "demarc"
    NETWORK_SERVICE = "network_service"
    NETWORK_SERVICE_CONFIG = "network_service_config"


@dataclass_json
@dataclass
class Mp2MpNetworkProductOffering:
    bandwidth_max: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandwidth_max' }})
    bandwidth_min: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandwidth_min' }})
    display_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    downgrade_allowed: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downgrade_allowed' }})
    handover_metro_area: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'handover_metro_area' }})
    handover_metro_area_network: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'handover_metro_area_network' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    physical_port_speed: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'physical_port_speed' }})
    provider_vlans: Mp2MpNetworkProductOfferingProviderVlansEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provider_vlans' }})
    resource_type: Mp2MpNetworkProductOfferingResourceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    service_metro_area: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_metro_area' }})
    service_metro_area_network: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_metro_area_network' }})
    service_provider: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_provider' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    upgrade_allowed: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upgrade_allowed' }})
    
