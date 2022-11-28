package shared

type ObscaSupportData1AppliedAuthenticationApproachEnum string

const (
	ObscaSupportData1AppliedAuthenticationApproachEnumCa  ObscaSupportData1AppliedAuthenticationApproachEnum = "CA"
	ObscaSupportData1AppliedAuthenticationApproachEnumSca ObscaSupportData1AppliedAuthenticationApproachEnum = "SCA"
)

type ObscaSupportData1RequestedScaExemptionTypeEnum string

const (
	ObscaSupportData1RequestedScaExemptionTypeEnumBillPayment       ObscaSupportData1RequestedScaExemptionTypeEnum = "BillPayment"
	ObscaSupportData1RequestedScaExemptionTypeEnumContactlessTravel ObscaSupportData1RequestedScaExemptionTypeEnum = "ContactlessTravel"
	ObscaSupportData1RequestedScaExemptionTypeEnumEcommerceGoods    ObscaSupportData1RequestedScaExemptionTypeEnum = "EcommerceGoods"
	ObscaSupportData1RequestedScaExemptionTypeEnumEcommerceServices ObscaSupportData1RequestedScaExemptionTypeEnum = "EcommerceServices"
	ObscaSupportData1RequestedScaExemptionTypeEnumKiosk             ObscaSupportData1RequestedScaExemptionTypeEnum = "Kiosk"
	ObscaSupportData1RequestedScaExemptionTypeEnumParking           ObscaSupportData1RequestedScaExemptionTypeEnum = "Parking"
	ObscaSupportData1RequestedScaExemptionTypeEnumPartyToParty      ObscaSupportData1RequestedScaExemptionTypeEnum = "PartyToParty"
)

// ObscaSupportData1
// Supporting Data provided by TPP, when requesting SCA Exemption.
type ObscaSupportData1 struct {
	AppliedAuthenticationApproach *ObscaSupportData1AppliedAuthenticationApproachEnum `json:"AppliedAuthenticationApproach,omitempty"`
	ReferencePaymentOrderID       *string                                             `json:"ReferencePaymentOrderId,omitempty"`
	RequestedScaExemptionType     *ObscaSupportData1RequestedScaExemptionTypeEnum     `json:"RequestedSCAExemptionType,omitempty"`
}
