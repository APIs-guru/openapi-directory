package shared

type StepStateEnum string

const (
	StepStateEnumStateUnspecified             StepStateEnum = "STATE_UNSPECIFIED"
	StepStateEnumStartFromInstance            StepStateEnum = "START_FROM_INSTANCE"
	StepStateEnumStartFromInternet            StepStateEnum = "START_FROM_INTERNET"
	StepStateEnumStartFromPrivateNetwork      StepStateEnum = "START_FROM_PRIVATE_NETWORK"
	StepStateEnumStartFromGkeMaster           StepStateEnum = "START_FROM_GKE_MASTER"
	StepStateEnumStartFromCloudSQLInstance    StepStateEnum = "START_FROM_CLOUD_SQL_INSTANCE"
	StepStateEnumStartFromCloudFunction       StepStateEnum = "START_FROM_CLOUD_FUNCTION"
	StepStateEnumApplyIngressFirewallRule     StepStateEnum = "APPLY_INGRESS_FIREWALL_RULE"
	StepStateEnumApplyEgressFirewallRule      StepStateEnum = "APPLY_EGRESS_FIREWALL_RULE"
	StepStateEnumApplyRoute                   StepStateEnum = "APPLY_ROUTE"
	StepStateEnumApplyForwardingRule          StepStateEnum = "APPLY_FORWARDING_RULE"
	StepStateEnumSpoofingApproved             StepStateEnum = "SPOOFING_APPROVED"
	StepStateEnumArriveAtInstance             StepStateEnum = "ARRIVE_AT_INSTANCE"
	StepStateEnumArriveAtInternalLoadBalancer StepStateEnum = "ARRIVE_AT_INTERNAL_LOAD_BALANCER"
	StepStateEnumArriveAtExternalLoadBalancer StepStateEnum = "ARRIVE_AT_EXTERNAL_LOAD_BALANCER"
	StepStateEnumArriveAtVpnGateway           StepStateEnum = "ARRIVE_AT_VPN_GATEWAY"
	StepStateEnumArriveAtVpnTunnel            StepStateEnum = "ARRIVE_AT_VPN_TUNNEL"
	StepStateEnumArriveAtVpcConnector         StepStateEnum = "ARRIVE_AT_VPC_CONNECTOR"
	StepStateEnumNat                          StepStateEnum = "NAT"
	StepStateEnumProxyConnection              StepStateEnum = "PROXY_CONNECTION"
	StepStateEnumDeliver                      StepStateEnum = "DELIVER"
	StepStateEnumDrop                         StepStateEnum = "DROP"
	StepStateEnumForward                      StepStateEnum = "FORWARD"
	StepStateEnumAbort                        StepStateEnum = "ABORT"
	StepStateEnumViewerPermissionMissing      StepStateEnum = "VIEWER_PERMISSION_MISSING"
)

type Step struct {
	Abort            *AbortInfo            `json:"abort,omitempty"`
	CausesDrop       *bool                 `json:"causesDrop,omitempty"`
	CloudFunction    *CloudFunctionInfo    `json:"cloudFunction,omitempty"`
	CloudSQLInstance *CloudSQLInstanceInfo `json:"cloudSqlInstance,omitempty"`
	Deliver          *DeliverInfo          `json:"deliver,omitempty"`
	Description      *string               `json:"description,omitempty"`
	Drop             *DropInfo             `json:"drop,omitempty"`
	Endpoint         *EndpointInfo         `json:"endpoint,omitempty"`
	Firewall         *FirewallInfo         `json:"firewall,omitempty"`
	Forward          *ForwardInfo          `json:"forward,omitempty"`
	ForwardingRule   *ForwardingRuleInfo   `json:"forwardingRule,omitempty"`
	GkeMaster        *GkeMasterInfo        `json:"gkeMaster,omitempty"`
	Instance         *InstanceInfo         `json:"instance,omitempty"`
	LoadBalancer     *LoadBalancerInfo     `json:"loadBalancer,omitempty"`
	Network          *NetworkInfo          `json:"network,omitempty"`
	ProjectID        *string               `json:"projectId,omitempty"`
	Route            *RouteInfo            `json:"route,omitempty"`
	State            *StepStateEnum        `json:"state,omitempty"`
	VpcConnector     *VpcConnectorInfo     `json:"vpcConnector,omitempty"`
	VpnGateway       *VpnGatewayInfo       `json:"vpnGateway,omitempty"`
	VpnTunnel        *VpnTunnelInfo        `json:"vpnTunnel,omitempty"`
}
