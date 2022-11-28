from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LoadBalancerBackendHealthCheckFirewallStateEnum(str, Enum):
    HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED"
    CONFIGURED = "CONFIGURED"
    MISCONFIGURED = "MISCONFIGURED"


@dataclass_json
@dataclass
class LoadBalancerBackend:
    r"""LoadBalancerBackend
    For display only. Metadata associated with a specific load balancer backend.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    health_check_allowing_firewall_rules: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthCheckAllowingFirewallRules') }})
    health_check_blocking_firewall_rules: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthCheckBlockingFirewallRules') }})
    health_check_firewall_state: Optional[LoadBalancerBackendHealthCheckFirewallStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthCheckFirewallState') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
