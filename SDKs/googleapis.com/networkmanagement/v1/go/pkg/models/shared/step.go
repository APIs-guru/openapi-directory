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
	Abort            *AbortInfo            `json:"abort"`
	CausesDrop       *bool                 `json:"causesDrop"`
	CloudFunction    *CloudFunctionInfo    `json:"cloudFunction"`
	CloudSQLInstance *CloudSQLInstanceInfo `json:"cloudSqlInstance"`
	Deliver          *DeliverInfo          `json:"deliver"`
	Description      *string               `json:"description"`
	Drop             *DropInfo             `json:"drop"`
	Endpoint         *EndpointInfo         `json:"endpoint"`
	Firewall         *FirewallInfo         `json:"firewall"`
	Forward          *ForwardInfo          `json:"forward"`
	ForwardingRule   *ForwardingRuleInfo   `json:"forwardingRule"`
	GkeMaster        *GkeMasterInfo        `json:"gkeMaster"`
	Instance         *InstanceInfo         `json:"instance"`
	LoadBalancer     *LoadBalancerInfo     `json:"loadBalancer"`
	Network          *NetworkInfo          `json:"network"`
	ProjectID        *string               `json:"projectId"`
	Route            *RouteInfo            `json:"route"`
	State            *StepStateEnum        `json:"state"`
	VpcConnector     *VpcConnectorInfo     `json:"vpcConnector"`
	VpnGateway       *VpnGatewayInfo       `json:"vpnGateway"`
	VpnTunnel        *VpnTunnelInfo        `json:"vpnTunnel"`
}
