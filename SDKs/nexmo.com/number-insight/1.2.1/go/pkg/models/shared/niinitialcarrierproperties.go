package shared

type NiInitialCarrierPropertiesNetworkTypeEnum string

const (
	NiInitialCarrierPropertiesNetworkTypeEnumMobile           NiInitialCarrierPropertiesNetworkTypeEnum = "mobile"
	NiInitialCarrierPropertiesNetworkTypeEnumLandline         NiInitialCarrierPropertiesNetworkTypeEnum = "landline"
	NiInitialCarrierPropertiesNetworkTypeEnumLandlinePremium  NiInitialCarrierPropertiesNetworkTypeEnum = "landline_premium"
	NiInitialCarrierPropertiesNetworkTypeEnumLandlineTollfree NiInitialCarrierPropertiesNetworkTypeEnum = "landline_tollfree"
	NiInitialCarrierPropertiesNetworkTypeEnumVirtual          NiInitialCarrierPropertiesNetworkTypeEnum = "virtual"
	NiInitialCarrierPropertiesNetworkTypeEnumUnknown          NiInitialCarrierPropertiesNetworkTypeEnum = "unknown"
	NiInitialCarrierPropertiesNetworkTypeEnumPager            NiInitialCarrierPropertiesNetworkTypeEnum = "pager"
	NiInitialCarrierPropertiesNetworkTypeEnumNull             NiInitialCarrierPropertiesNetworkTypeEnum = "null"
)

// NiInitialCarrierProperties
// Information about the network `number` was initially connected to.
type NiInitialCarrierProperties struct {
	Country     *string                                    `json:"country,omitempty"`
	Name        *string                                    `json:"name,omitempty"`
	NetworkCode *string                                    `json:"network_code,omitempty"`
	NetworkType *NiInitialCarrierPropertiesNetworkTypeEnum `json:"network_type,omitempty"`
}
