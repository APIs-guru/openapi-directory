package shared

type RouteServerNetworkFeatureConfigUpdatePartialBgpSessionTypeEnum string

const (
	RouteServerNetworkFeatureConfigUpdatePartialBgpSessionTypeEnumActive  RouteServerNetworkFeatureConfigUpdatePartialBgpSessionTypeEnum = "active"
	RouteServerNetworkFeatureConfigUpdatePartialBgpSessionTypeEnumPassive RouteServerNetworkFeatureConfigUpdatePartialBgpSessionTypeEnum = "passive"
)

type RouteServerNetworkFeatureConfigUpdatePartialSessionModeEnum string

const (
	RouteServerNetworkFeatureConfigUpdatePartialSessionModeEnumPublic    RouteServerNetworkFeatureConfigUpdatePartialSessionModeEnum = "public"
	RouteServerNetworkFeatureConfigUpdatePartialSessionModeEnumCollector RouteServerNetworkFeatureConfigUpdatePartialSessionModeEnum = "collector"
)

type RouteServerNetworkFeatureConfigUpdatePartial struct {
	AsSetV4          *string                                                         `json:"as_set_v4"`
	AsSetV6          *string                                                         `json:"as_set_v6"`
	Asn              *int64                                                          `json:"asn"`
	BgpSessionType   *RouteServerNetworkFeatureConfigUpdatePartialBgpSessionTypeEnum `json:"bgp_session_type"`
	ConsumingAccount *string                                                         `json:"consuming_account"`
	ExternalRef      *string                                                         `json:"external_ref"`
	InsertIxpAsn     *bool                                                           `json:"insert_ixp_asn"`
	IP               *string                                                         `json:"ip"`
	ManagingAccount  *string                                                         `json:"managing_account"`
	MaxPrefixV4      *int64                                                          `json:"max_prefix_v4"`
	MaxPrefixV6      *int64                                                          `json:"max_prefix_v6"`
	Password         *string                                                         `json:"password"`
	SessionMode      *RouteServerNetworkFeatureConfigUpdatePartialSessionModeEnum    `json:"session_mode"`
	Type             string                                                          `json:"type"`
}
