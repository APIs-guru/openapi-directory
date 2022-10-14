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
	AsSetV4              *string                                                  `json:"as_set_v4,omitempty"`
	AsSetV6              *string                                                  `json:"as_set_v6,omitempty"`
	Asn                  int64                                                    `json:"asn"`
	BgpSessionType       RouteServerNetworkFeatureConfigRequestBgpSessionTypeEnum `json:"bgp_session_type"`
	BillingAccount       string                                                   `json:"billing_account"`
	ConsumingAccount     string                                                   `json:"consuming_account"`
	ContractRef          *string                                                  `json:"contract_ref,omitempty"`
	ExternalRef          *string                                                  `json:"external_ref,omitempty"`
	InsertIxpAsn         *bool                                                    `json:"insert_ixp_asn,omitempty"`
	IP                   string                                                   `json:"ip"`
	ManagingAccount      string                                                   `json:"managing_account"`
	MaxPrefixV4          *int64                                                   `json:"max_prefix_v4,omitempty"`
	MaxPrefixV6          *int64                                                   `json:"max_prefix_v6,omitempty"`
	NetworkFeature       string                                                   `json:"network_feature"`
	NetworkServiceConfig string                                                   `json:"network_service_config"`
	Password             *string                                                  `json:"password,omitempty"`
	PurchaseOrder        *string                                                  `json:"purchase_order,omitempty"`
	RoleAssignments      []string                                                 `json:"role_assignments"`
	SessionMode          RouteServerNetworkFeatureConfigRequestSessionModeEnum    `json:"session_mode"`
	Type                 string                                                   `json:"type"`
}
