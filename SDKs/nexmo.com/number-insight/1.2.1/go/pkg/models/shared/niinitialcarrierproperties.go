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

type NiInitialCarrierProperties struct {
	Country     *string                                    `json:"country"`
	Name        *string                                    `json:"name"`
	NetworkCode *string                                    `json:"network_code"`
	NetworkType *NiInitialCarrierPropertiesNetworkTypeEnum `json:"network_type"`
}
