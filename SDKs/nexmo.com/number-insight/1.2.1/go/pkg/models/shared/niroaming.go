package shared




type NiRoamingStatusEnum string

const (
    NiRoamingStatusEnumRoaming NiRoamingStatusEnum = "roaming"
NiRoamingStatusEnumNotRoaming NiRoamingStatusEnum = "not_roaming"
)


type NiRoaming struct {
    RoamingCountryCode *string `json:"roaming_country_code,omitempty"`
    RoamingNetworkCode *string `json:"roaming_network_code,omitempty"`
    RoamingNetworkName *string `json:"roaming_network_name,omitempty"`
    Status *NiRoamingStatusEnum `json:"status,omitempty"`
    
}

