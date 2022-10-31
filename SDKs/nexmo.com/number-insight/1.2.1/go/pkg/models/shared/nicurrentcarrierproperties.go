package shared




type NiCurrentCarrierPropertiesNetworkTypeEnum string

const (
    NiCurrentCarrierPropertiesNetworkTypeEnumMobile NiCurrentCarrierPropertiesNetworkTypeEnum = "mobile"
NiCurrentCarrierPropertiesNetworkTypeEnumLandline NiCurrentCarrierPropertiesNetworkTypeEnum = "landline"
NiCurrentCarrierPropertiesNetworkTypeEnumLandlinePremium NiCurrentCarrierPropertiesNetworkTypeEnum = "landline_premium"
NiCurrentCarrierPropertiesNetworkTypeEnumLandlineTollfree NiCurrentCarrierPropertiesNetworkTypeEnum = "landline_tollfree"
NiCurrentCarrierPropertiesNetworkTypeEnumVirtual NiCurrentCarrierPropertiesNetworkTypeEnum = "virtual"
NiCurrentCarrierPropertiesNetworkTypeEnumUnknown NiCurrentCarrierPropertiesNetworkTypeEnum = "unknown"
NiCurrentCarrierPropertiesNetworkTypeEnumPager NiCurrentCarrierPropertiesNetworkTypeEnum = "pager"
NiCurrentCarrierPropertiesNetworkTypeEnumNull NiCurrentCarrierPropertiesNetworkTypeEnum = "null"
)


type NiCurrentCarrierProperties struct {
    Country *string `json:"country,omitempty"`
    Name *string `json:"name,omitempty"`
    NetworkCode *string `json:"network_code,omitempty"`
    NetworkType *NiCurrentCarrierPropertiesNetworkTypeEnum `json:"network_type,omitempty"`
    
}

