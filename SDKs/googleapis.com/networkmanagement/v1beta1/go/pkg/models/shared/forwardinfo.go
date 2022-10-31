package shared

type ForwardInfoTargetEnum string

const (
	ForwardInfoTargetEnumTargetUnspecified          ForwardInfoTargetEnum = "TARGET_UNSPECIFIED"
	ForwardInfoTargetEnumPeeringVpc                 ForwardInfoTargetEnum = "PEERING_VPC"
	ForwardInfoTargetEnumVpnGateway                 ForwardInfoTargetEnum = "VPN_GATEWAY"
	ForwardInfoTargetEnumInterconnect               ForwardInfoTargetEnum = "INTERCONNECT"
	ForwardInfoTargetEnumGkeMaster                  ForwardInfoTargetEnum = "GKE_MASTER"
	ForwardInfoTargetEnumImportedCustomRouteNextHop ForwardInfoTargetEnum = "IMPORTED_CUSTOM_ROUTE_NEXT_HOP"
	ForwardInfoTargetEnumCloudSQLInstance           ForwardInfoTargetEnum = "CLOUD_SQL_INSTANCE"
	ForwardInfoTargetEnumAnotherProject             ForwardInfoTargetEnum = "ANOTHER_PROJECT"
)

type ForwardInfo struct {
	ResourceURI *string                `json:"resourceUri,omitempty"`
	Target      *ForwardInfoTargetEnum `json:"target,omitempty"`
}
