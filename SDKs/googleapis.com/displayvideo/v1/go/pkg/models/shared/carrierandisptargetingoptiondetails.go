package shared

type CarrierAndIspTargetingOptionDetailsTypeEnum string

const (
	CarrierAndIspTargetingOptionDetailsTypeEnumCarrierAndIspTypeUnspecified CarrierAndIspTargetingOptionDetailsTypeEnum = "CARRIER_AND_ISP_TYPE_UNSPECIFIED"
	CarrierAndIspTargetingOptionDetailsTypeEnumCarrierAndIspTypeIsp         CarrierAndIspTargetingOptionDetailsTypeEnum = "CARRIER_AND_ISP_TYPE_ISP"
	CarrierAndIspTargetingOptionDetailsTypeEnumCarrierAndIspTypeCarrier     CarrierAndIspTargetingOptionDetailsTypeEnum = "CARRIER_AND_ISP_TYPE_CARRIER"
)

// CarrierAndIspTargetingOptionDetails
// Represents a targetable carrier or ISP. This will be populated in the carrier_and_isp_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_CARRIER_AND_ISP`.
type CarrierAndIspTargetingOptionDetails struct {
	DisplayName *string                                      `json:"displayName,omitempty"`
	Type        *CarrierAndIspTargetingOptionDetailsTypeEnum `json:"type,omitempty"`
}
