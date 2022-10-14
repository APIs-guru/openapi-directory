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
	AsSetV4          *string                                                         `json:"as_set_v4,omitempty"`
	AsSetV6          *string                                                         `json:"as_set_v6,omitempty"`
	Asn              *int64                                                          `json:"asn,omitempty"`
	BgpSessionType   *RouteServerNetworkFeatureConfigUpdatePartialBgpSessionTypeEnum `json:"bgp_session_type,omitempty"`
	ConsumingAccount *string                                                         `json:"consuming_account,omitempty"`
	ExternalRef      *string                                                         `json:"external_ref,omitempty"`
	InsertIxpAsn     *bool                                                           `json:"insert_ixp_asn,omitempty"`
	IP               *string                                                         `json:"ip,omitempty"`
	ManagingAccount  *string                                                         `json:"managing_account,omitempty"`
	MaxPrefixV4      *int64                                                          `json:"max_prefix_v4,omitempty"`
	MaxPrefixV6      *int64                                                          `json:"max_prefix_v6,omitempty"`
	Password         *string                                                         `json:"password,omitempty"`
	SessionMode      *RouteServerNetworkFeatureConfigUpdatePartialSessionModeEnum    `json:"session_mode,omitempty"`
	Type             string                                                          `json:"type"`
}
