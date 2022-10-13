from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class LoadBalancerBackendHealthCheckFirewallStateEnum(str, Enum):
    HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED"
    CONFIGURED = "CONFIGURED"
    MISCONFIGURED = "MISCONFIGURED"


@dataclass_json
@dataclass
class LoadBalancerBackend:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    health_check_allowing_firewall_rules: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthCheckAllowingFirewallRules' }})
    health_check_blocking_firewall_rules: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthCheckBlockingFirewallRules' }})
    health_check_firewall_state: Optional[LoadBalancerBackendHealthCheckFirewallStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthCheckFirewallState' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
