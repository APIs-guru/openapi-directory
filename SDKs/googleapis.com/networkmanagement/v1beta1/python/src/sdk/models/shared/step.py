from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import abortinfo
from . import cloudfunctioninfo
from . import cloudsqlinstanceinfo
from . import deliverinfo
from . import dropinfo
from . import endpointinfo
from . import firewallinfo
from . import forwardinfo
from . import forwardingruleinfo
from . import gkemasterinfo
from . import instanceinfo
from . import loadbalancerinfo
from . import networkinfo
from . import routeinfo
from . import vpcconnectorinfo
from . import vpngatewayinfo
from . import vpntunnelinfo

class StepStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    START_FROM_INSTANCE = "START_FROM_INSTANCE"
    START_FROM_INTERNET = "START_FROM_INTERNET"
    START_FROM_PRIVATE_NETWORK = "START_FROM_PRIVATE_NETWORK"
    START_FROM_GKE_MASTER = "START_FROM_GKE_MASTER"
    START_FROM_CLOUD_SQL_INSTANCE = "START_FROM_CLOUD_SQL_INSTANCE"
    START_FROM_CLOUD_FUNCTION = "START_FROM_CLOUD_FUNCTION"
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
    abort: Optional[abortinfo.AbortInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abort' }})
    causes_drop: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'causesDrop' }})
    cloud_function: Optional[cloudfunctioninfo.CloudFunctionInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudFunction' }})
    cloud_sql_instance: Optional[cloudsqlinstanceinfo.CloudSQLInstanceInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudSqlInstance' }})
    deliver: Optional[deliverinfo.DeliverInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliver' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    drop: Optional[dropinfo.DropInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'drop' }})
    endpoint: Optional[endpointinfo.EndpointInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoint' }})
    firewall: Optional[firewallinfo.FirewallInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firewall' }})
    forward: Optional[forwardinfo.ForwardInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forward' }})
    forwarding_rule: Optional[forwardingruleinfo.ForwardingRuleInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forwardingRule' }})
    gke_master: Optional[gkemasterinfo.GkeMasterInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gkeMaster' }})
    instance: Optional[instanceinfo.InstanceInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    load_balancer: Optional[loadbalancerinfo.LoadBalancerInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loadBalancer' }})
    network: Optional[networkinfo.NetworkInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    route: Optional[routeinfo.RouteInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'route' }})
    state: Optional[StepStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    vpc_connector: Optional[vpcconnectorinfo.VpcConnectorInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcConnector' }})
    vpn_gateway: Optional[vpngatewayinfo.VpnGatewayInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpnGateway' }})
    vpn_tunnel: Optional[vpntunnelinfo.VpnTunnelInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpnTunnel' }})
    
