package shared

type RouteServerNetworkFeatureConfigUpdateBgpSessionTypeEnum string

const (
	RouteServerNetworkFeatureConfigUpdateBgpSessionTypeEnumActive  RouteServerNetworkFeatureConfigUpdateBgpSessionTypeEnum = "active"
	RouteServerNetworkFeatureConfigUpdateBgpSessionTypeEnumPassive RouteServerNetworkFeatureConfigUpdateBgpSessionTypeEnum = "passive"
)

type RouteServerNetworkFeatureConfigUpdateSessionModeEnum string

const (
	RouteServerNetworkFeatureConfigUpdateSessionModeEnumPublic    RouteServerNetworkFeatureConfigUpdateSessionModeEnum = "public"
	RouteServerNetworkFeatureConfigUpdateSessionModeEnumCollector RouteServerNetworkFeatureConfigUpdateSessionModeEnum = "collector"
)

type RouteServerNetworkFeatureConfigUpdate struct {
	AsSetV4          *string                                                 `json:"as_set_v4"`
	AsSetV6          *string                                                 `json:"as_set_v6"`
	Asn              int64                                                   `json:"asn"`
	BgpSessionType   RouteServerNetworkFeatureConfigUpdateBgpSessionTypeEnum `json:"bgp_session_type"`
	ConsumingAccount string                                                  `json:"consuming_account"`
	ExternalRef      *string                                                 `json:"external_ref"`
	InsertIxpAsn     *bool                                                   `json:"insert_ixp_asn"`
	IP               string                                                  `json:"ip"`
	ManagingAccount  string                                                  `json:"managing_account"`
	MaxPrefixV4      *int64                                                  `json:"max_prefix_v4"`
	MaxPrefixV6      *int64                                                  `json:"max_prefix_v6"`
	Password         *string                                                 `json:"password"`
	SessionMode      RouteServerNetworkFeatureConfigUpdateSessionModeEnum    `json:"session_mode"`
	Type             string                                                  `json:"type"`
}
