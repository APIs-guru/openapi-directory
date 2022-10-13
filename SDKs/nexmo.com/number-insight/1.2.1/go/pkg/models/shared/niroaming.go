package shared

type NiRoamingStatusEnum string

const (
	NiRoamingStatusEnumRoaming    NiRoamingStatusEnum = "roaming"
	NiRoamingStatusEnumNotRoaming NiRoamingStatusEnum = "not_roaming"
)

type NiRoaming struct {
	RoamingCountryCode *string              `json:"roaming_country_code"`
	RoamingNetworkCode *string              `json:"roaming_network_code"`
	RoamingNetworkName *string              `json:"roaming_network_name"`
	Status             *NiRoamingStatusEnum `json:"status"`
}
