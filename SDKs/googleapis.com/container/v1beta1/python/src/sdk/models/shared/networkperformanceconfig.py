from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class NetworkPerformanceConfigExternalIPEgressBandwidthTierEnum(str, Enum):
    TIER_UNSPECIFIED = "TIER_UNSPECIFIED"
    TIER_1 = "TIER_1"

class NetworkPerformanceConfigTotalEgressBandwidthTierEnum(str, Enum):
    TIER_UNSPECIFIED = "TIER_UNSPECIFIED"
    TIER_1 = "TIER_1"


@dataclass_json
@dataclass
class NetworkPerformanceConfig:
    external_ip_egress_bandwidth_tier: Optional[NetworkPerformanceConfigExternalIPEgressBandwidthTierEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalIpEgressBandwidthTier' }})
    total_egress_bandwidth_tier: Optional[NetworkPerformanceConfigTotalEgressBandwidthTierEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalEgressBandwidthTier' }})
    
