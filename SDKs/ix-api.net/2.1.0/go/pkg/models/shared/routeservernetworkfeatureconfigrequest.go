package shared

type RouteServerNetworkFeatureConfigRequestBgpSessionTypeEnum string

const (
	RouteServerNetworkFeatureConfigRequestBgpSessionTypeEnumActive  RouteServerNetworkFeatureConfigRequestBgpSessionTypeEnum = "active"
	RouteServerNetworkFeatureConfigRequestBgpSessionTypeEnumPassive RouteServerNetworkFeatureConfigRequestBgpSessionTypeEnum = "passive"
)

type RouteServerNetworkFeatureConfigRequestSessionModeEnum string

const (
	RouteServerNetworkFeatureConfigRequestSessionModeEnumPublic    RouteServerNetworkFeatureConfigRequestSessionModeEnum = "public"
	RouteServerNetworkFeatureConfigRequestSessionModeEnumCollector RouteServerNetworkFeatureConfigRequestSessionModeEnum = "collector"
)

type RouteServerNetworkFeatureConfigRequest struct {
	AsSetV4              *string                                                  `json:"as_set_v4"`
	AsSetV6              *string                                                  `json:"as_set_v6"`
	Asn                  int64                                                    `json:"asn"`
	BgpSessionType       RouteServerNetworkFeatureConfigRequestBgpSessionTypeEnum `json:"bgp_session_type"`
	BillingAccount       string                                                   `json:"billing_account"`
	ConsumingAccount     string                                                   `json:"consuming_account"`
	ContractRef          *string                                                  `json:"contract_ref"`
	ExternalRef          *string                                                  `json:"external_ref"`
	InsertIxpAsn         *bool                                                    `json:"insert_ixp_asn"`
	IP                   string                                                   `json:"ip"`
	ManagingAccount      string                                                   `json:"managing_account"`
	MaxPrefixV4          *int64                                                   `json:"max_prefix_v4"`
	MaxPrefixV6          *int64                                                   `json:"max_prefix_v6"`
	NetworkFeature       string                                                   `json:"network_feature"`
	NetworkServiceConfig string                                                   `json:"network_service_config"`
	Password             *string                                                  `json:"password"`
	PurchaseOrder        *string                                                  `json:"purchase_order"`
	RoleAssignments      []string                                                 `json:"role_assignments"`
	SessionMode          RouteServerNetworkFeatureConfigRequestSessionModeEnum    `json:"session_mode"`
	Type                 string                                                   `json:"type"`
}
