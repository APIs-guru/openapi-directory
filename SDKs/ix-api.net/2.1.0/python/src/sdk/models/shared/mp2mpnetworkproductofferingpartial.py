from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class Mp2MpNetworkProductOfferingPartialProviderVlansEnum(str, Enum):
    SINGLE = "single"
    MULTI = "multi"

class Mp2MpNetworkProductOfferingPartialResourceTypeEnum(str, Enum):
    CONNECTION = "connection"
    DEMARC = "demarc"
    NETWORK_SERVICE = "network_service"
    NETWORK_SERVICE_CONFIG = "network_service_config"


@dataclass_json
@dataclass
class Mp2MpNetworkProductOfferingPartial:
    bandwidth_max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandwidth_max' }})
    bandwidth_min: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandwidth_min' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    downgrade_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downgrade_allowed' }})
    handover_metro_area: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'handover_metro_area' }})
    handover_metro_area_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'handover_metro_area_network' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    physical_port_speed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'physical_port_speed' }})
    provider_vlans: Optional[Mp2MpNetworkProductOfferingPartialProviderVlansEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provider_vlans' }})
    resource_type: Optional[Mp2MpNetworkProductOfferingPartialResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    service_metro_area: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_metro_area' }})
    service_metro_area_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_metro_area_network' }})
    service_provider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_provider' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    upgrade_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upgrade_allowed' }})
    
