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

type ObscaSupportData1 struct {
	AppliedAuthenticationApproach *ObscaSupportData1AppliedAuthenticationApproachEnum `json:"AppliedAuthenticationApproach"`
	ReferencePaymentOrderID       *string                                             `json:"ReferencePaymentOrderId"`
	RequestedScaExemptionType     *ObscaSupportData1RequestedScaExemptionTypeEnum     `json:"RequestedSCAExemptionType"`
}
