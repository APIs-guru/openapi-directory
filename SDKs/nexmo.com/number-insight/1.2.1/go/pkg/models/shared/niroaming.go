package shared

type NiRoamingStatusEnum string

const (
	NiRoamingStatusEnumRoaming    NiRoamingStatusEnum = "roaming"
	NiRoamingStatusEnumNotRoaming NiRoamingStatusEnum = "not_roaming"
)

// NiRoaming
// Information about the roaming status for `number`. This is applicable to mobile numbers only. If unknown, this may return a string of `unknown` instead of an object.
type NiRoaming struct {
	RoamingCountryCode *string              `json:"roaming_country_code,omitempty"`
	RoamingNetworkCode *string              `json:"roaming_network_code,omitempty"`
	RoamingNetworkName *string              `json:"roaming_network_name,omitempty"`
	Status             *NiRoamingStatusEnum `json:"status,omitempty"`
}
