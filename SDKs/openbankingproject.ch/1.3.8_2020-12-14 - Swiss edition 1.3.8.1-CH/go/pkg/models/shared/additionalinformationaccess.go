package shared

type AdditionalInformationAccess struct {
	OwnerName            []AccountReference16Ch `json:"ownerName"`
	TrustedBeneficiaries []AccountReference16Ch `json:"trustedBeneficiaries"`
}
