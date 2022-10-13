package shared

type RouteServerNetworkFeatureAddressFamiliesEnum string

const (
	RouteServerNetworkFeatureAddressFamiliesEnumAfInet  RouteServerNetworkFeatureAddressFamiliesEnum = "af_inet"
	RouteServerNetworkFeatureAddressFamiliesEnumAfInet6 RouteServerNetworkFeatureAddressFamiliesEnum = "af_inet6"
)

type RouteServerNetworkFeatureAvailableBgpSessionTypesEnum string

const (
	RouteServerNetworkFeatureAvailableBgpSessionTypesEnumActive  RouteServerNetworkFeatureAvailableBgpSessionTypesEnum = "active"
	RouteServerNetworkFeatureAvailableBgpSessionTypesEnumPassive RouteServerNetworkFeatureAvailableBgpSessionTypesEnum = "passive"
)

type RouteServerNetworkFeatureSessionModeEnum string

const (
	RouteServerNetworkFeatureSessionModeEnumPublic    RouteServerNetworkFeatureSessionModeEnum = "public"
	RouteServerNetworkFeatureSessionModeEnumCollector RouteServerNetworkFeatureSessionModeEnum = "collector"
)

type RouteServerNetworkFeature struct {
	AddressFamilies          []RouteServerNetworkFeatureAddressFamiliesEnum          `json:"address_families"`
	Asn                      int64                                                   `json:"asn"`
	AvailableBgpSessionTypes []RouteServerNetworkFeatureAvailableBgpSessionTypesEnum `json:"available_bgp_session_types"`
	Flags                    []IxpSpecificFeatureFlag                                `json:"flags"`
	Fqdn                     string                                                  `json:"fqdn"`
	ID                       string                                                  `json:"id"`
	IPV4                     string                                                  `json:"ip_v4"`
	IPV6                     string                                                  `json:"ip_v6"`
	LookingGlassURL          *string                                                 `json:"looking_glass_url"`
	Name                     string                                                  `json:"name"`
	NetworkService           string                                                  `json:"network_service"`
	NfcRequiredContactRoles  []string                                                `json:"nfc_required_contact_roles"`
	Required                 bool                                                    `json:"required"`
	SessionMode              RouteServerNetworkFeatureSessionModeEnum                `json:"session_mode"`
	Type                     string                                                  `json:"type"`
}
