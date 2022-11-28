from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class StepStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    START_FROM_INSTANCE = "START_FROM_INSTANCE"
    START_FROM_INTERNET = "START_FROM_INTERNET"
    START_FROM_PRIVATE_NETWORK = "START_FROM_PRIVATE_NETWORK"
    START_FROM_GKE_MASTER = "START_FROM_GKE_MASTER"
    START_FROM_CLOUD_SQL_INSTANCE = "START_FROM_CLOUD_SQL_INSTANCE"
    START_FROM_CLOUD_FUNCTION = "START_FROM_CLOUD_FUNCTION"
    START_FROM_APP_ENGINE_VERSION = "START_FROM_APP_ENGINE_VERSION"
    START_FROM_CLOUD_RUN_REVISION = "START_FROM_CLOUD_RUN_REVISION"
    APPLY_INGRESS_FIREWALL_RULE = "APPLY_INGRESS_FIREWALL_RULE"
    APPLY_EGRESS_FIREWALL_RULE = "APPLY_EGRESS_FIREWALL_RULE"
    APPLY_ROUTE = "APPLY_ROUTE"
    APPLY_FORWARDING_RULE = "APPLY_FORWARDING_RULE"
    SPOOFING_APPROVED = "SPOOFING_APPROVED"
    ARRIVE_AT_INSTANCE = "ARRIVE_AT_INSTANCE"
    ARRIVE_AT_INTERNAL_LOAD_BALANCER = "ARRIVE_AT_INTERNAL_LOAD_BALANCER"
    ARRIVE_AT_EXTERNAL_LOAD_BALANCER = "ARRIVE_AT_EXTERNAL_LOAD_BALANCER"
    ARRIVE_AT_VPN_GATEWAY = "ARRIVE_AT_VPN_GATEWAY"
    ARRIVE_AT_VPN_TUNNEL = "ARRIVE_AT_VPN_TUNNEL"
    ARRIVE_AT_VPC_CONNECTOR = "ARRIVE_AT_VPC_CONNECTOR"
    NAT = "NAT"
    PROXY_CONNECTION = "PROXY_CONNECTION"
    DELIVER = "DELIVER"
    DROP = "DROP"
    FORWARD = "FORWARD"
    ABORT = "ABORT"
    VIEWER_PERMISSION_MISSING = "VIEWER_PERMISSION_MISSING"


@dataclass_json
@dataclass
class Step:
    r"""Step
    A simulated forwarding path is composed of multiple steps. Each step has a well-defined state and an associated configuration.
    """
    
    abort: Optional[AbortInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abort') }})
    app_engine_version: Optional[AppEngineVersionInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appEngineVersion') }})
    causes_drop: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('causesDrop') }})
    cloud_function: Optional[CloudFunctionInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudFunction') }})
    cloud_run_revision: Optional[CloudRunRevisionInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudRunRevision') }})
    cloud_sql_instance: Optional[CloudSQLInstanceInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudSqlInstance') }})
    deliver: Optional[DeliverInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliver') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    drop: Optional[DropInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drop') }})
    endpoint: Optional[EndpointInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    firewall: Optional[FirewallInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firewall') }})
    forward: Optional[ForwardInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forward') }})
    forwarding_rule: Optional[ForwardingRuleInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forwardingRule') }})
    gke_master: Optional[GkeMasterInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeMaster') }})
    instance: Optional[InstanceInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    load_balancer: Optional[LoadBalancerInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadBalancer') }})
    network: Optional[NetworkInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    route: Optional[RouteInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('route') }})
    state: Optional[StepStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    vpc_connector: Optional[VpcConnectorInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcConnector') }})
    vpn_gateway: Optional[VpnGatewayInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpnGateway') }})
    vpn_tunnel: Optional[VpnTunnelInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpnTunnel') }})
    
