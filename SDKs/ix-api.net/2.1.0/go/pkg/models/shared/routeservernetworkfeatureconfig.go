package shared

type RouteServerNetworkFeatureConfigBgpSessionTypeEnum string

const (
	RouteServerNetworkFeatureConfigBgpSessionTypeEnumActive  RouteServerNetworkFeatureConfigBgpSessionTypeEnum = "active"
	RouteServerNetworkFeatureConfigBgpSessionTypeEnumPassive RouteServerNetworkFeatureConfigBgpSessionTypeEnum = "passive"
)

type RouteServerNetworkFeatureConfigSessionModeEnum string

const (
	RouteServerNetworkFeatureConfigSessionModeEnumPublic    RouteServerNetworkFeatureConfigSessionModeEnum = "public"
	RouteServerNetworkFeatureConfigSessionModeEnumCollector RouteServerNetworkFeatureConfigSessionModeEnum = "collector"
)

type RouteServerNetworkFeatureConfigStateEnum string

const (
	RouteServerNetworkFeatureConfigStateEnumRequested               RouteServerNetworkFeatureConfigStateEnum = "requested"
	RouteServerNetworkFeatureConfigStateEnumAllocated               RouteServerNetworkFeatureConfigStateEnum = "allocated"
	RouteServerNetworkFeatureConfigStateEnumTesting                 RouteServerNetworkFeatureConfigStateEnum = "testing"
	RouteServerNetworkFeatureConfigStateEnumProduction              RouteServerNetworkFeatureConfigStateEnum = "production"
	RouteServerNetworkFeatureConfigStateEnumProductionChangePending RouteServerNetworkFeatureConfigStateEnum = "production_change_pending"
	RouteServerNetworkFeatureConfigStateEnumDecommissionRequested   RouteServerNetworkFeatureConfigStateEnum = "decommission_requested"
	RouteServerNetworkFeatureConfigStateEnumDecommissioned          RouteServerNetworkFeatureConfigStateEnum = "decommissioned"
	RouteServerNetworkFeatureConfigStateEnumArchived                RouteServerNetworkFeatureConfigStateEnum = "archived"
	RouteServerNetworkFeatureConfigStateEnumError                   RouteServerNetworkFeatureConfigStateEnum = "error"
	RouteServerNetworkFeatureConfigStateEnumOperator                RouteServerNetworkFeatureConfigStateEnum = "operator"
	RouteServerNetworkFeatureConfigStateEnumScheduled               RouteServerNetworkFeatureConfigStateEnum = "scheduled"
)

type RouteServerNetworkFeatureConfig struct {
	AsSetV4              *string                                           `json:"as_set_v4,omitempty"`
	AsSetV6              *string                                           `json:"as_set_v6,omitempty"`
	Asn                  int64                                             `json:"asn"`
	BgpSessionType       RouteServerNetworkFeatureConfigBgpSessionTypeEnum `json:"bgp_session_type"`
	BillingAccount       string                                            `json:"billing_account"`
	ConsumingAccount     string                                            `json:"consuming_account"`
	ContractRef          *string                                           `json:"contract_ref,omitempty"`
	ExternalRef          *string                                           `json:"external_ref,omitempty"`
	ID                   string                                            `json:"id"`
	InsertIxpAsn         *bool                                             `json:"insert_ixp_asn,omitempty"`
	IP                   string                                            `json:"ip"`
	ManagingAccount      string                                            `json:"managing_account"`
	MaxPrefixV4          *int64                                            `json:"max_prefix_v4,omitempty"`
	MaxPrefixV6          *int64                                            `json:"max_prefix_v6,omitempty"`
	NetworkFeature       string                                            `json:"network_feature"`
	NetworkServiceConfig string                                            `json:"network_service_config"`
	Password             *string                                           `json:"password,omitempty"`
	PurchaseOrder        *string                                           `json:"purchase_order,omitempty"`
	RoleAssignments      []string                                          `json:"role_assignments"`
	SessionMode          RouteServerNetworkFeatureConfigSessionModeEnum    `json:"session_mode"`
	State                RouteServerNetworkFeatureConfigStateEnum          `json:"state"`
	Status               []Status                                          `json:"status,omitempty"`
	Type                 string                                            `json:"type"`
}
