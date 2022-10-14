package shared

type CarrierAndIspTargetingOptionDetailsTypeEnum string

const (
	CarrierAndIspTargetingOptionDetailsTypeEnumCarrierAndIspTypeUnspecified CarrierAndIspTargetingOptionDetailsTypeEnum = "CARRIER_AND_ISP_TYPE_UNSPECIFIED"
	CarrierAndIspTargetingOptionDetailsTypeEnumCarrierAndIspTypeIsp         CarrierAndIspTargetingOptionDetailsTypeEnum = "CARRIER_AND_ISP_TYPE_ISP"
	CarrierAndIspTargetingOptionDetailsTypeEnumCarrierAndIspTypeCarrier     CarrierAndIspTargetingOptionDetailsTypeEnum = "CARRIER_AND_ISP_TYPE_CARRIER"
)

type CarrierAndIspTargetingOptionDetails struct {
	DisplayName *string                                      `json:"displayName,omitempty"`
	Type        *CarrierAndIspTargetingOptionDetailsTypeEnum `json:"type,omitempty"`
}
