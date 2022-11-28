from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NetworkPerformanceConfigExternalIPEgressBandwidthTierEnum(str, Enum):
    TIER_UNSPECIFIED = "TIER_UNSPECIFIED"
    TIER_1 = "TIER_1"

class NetworkPerformanceConfigTotalEgressBandwidthTierEnum(str, Enum):
    TIER_UNSPECIFIED = "TIER_UNSPECIFIED"
    TIER_1 = "TIER_1"


@dataclass_json
@dataclass
class NetworkPerformanceConfig:
    r"""NetworkPerformanceConfig
    Configuration of all network bandwidth tiers
    """
    
    external_ip_egress_bandwidth_tier: Optional[NetworkPerformanceConfigExternalIPEgressBandwidthTierEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalIpEgressBandwidthTier') }})
    total_egress_bandwidth_tier: Optional[NetworkPerformanceConfigTotalEgressBandwidthTierEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalEgressBandwidthTier') }})
    
