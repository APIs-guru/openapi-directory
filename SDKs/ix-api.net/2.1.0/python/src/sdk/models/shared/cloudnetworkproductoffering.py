from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class CloudNetworkProductOfferingDeliveryMethodEnum(str, Enum):
    DEDICATED = "dedicated"
    SHARED = "shared"

class CloudNetworkProductOfferingProviderVlansEnum(str, Enum):
    SINGLE = "single"
    MULTI = "multi"

class CloudNetworkProductOfferingResourceTypeEnum(str, Enum):
    CONNECTION = "connection"
    DEMARC = "demarc"
    NETWORK_SERVICE = "network_service"
    NETWORK_SERVICE_CONFIG = "network_service_config"

class CloudNetworkProductOfferingServiceProviderWorkflowEnum(str, Enum):
    EXCHANGE_FIRST = "exchange_first"
    PROVIDER_FIRST = "provider_first"


@dataclass_json
@dataclass
class CloudNetworkProductOffering:
    bandwidth_max: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandwidth_max' }})
    bandwidth_min: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandwidth_min' }})
    delivery_method: CloudNetworkProductOfferingDeliveryMethodEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delivery_method' }})
    display_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    diversity: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diversity' }})
    downgrade_allowed: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downgrade_allowed' }})
    handover_metro_area: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'handover_metro_area' }})
    handover_metro_area_network: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'handover_metro_area_network' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    physical_port_speed: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'physical_port_speed' }})
    provider_vlans: CloudNetworkProductOfferingProviderVlansEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provider_vlans' }})
    resource_type: CloudNetworkProductOfferingResourceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    service_metro_area: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_metro_area' }})
    service_metro_area_network: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_metro_area_network' }})
    service_provider: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_provider' }})
    service_provider_pop: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_provider_pop' }})
    service_provider_region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_provider_region' }})
    service_provider_workflow: CloudNetworkProductOfferingServiceProviderWorkflowEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_provider_workflow' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    upgrade_allowed: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upgrade_allowed' }})
    
