package shared

type AdditionalInformationAccess struct {
	OwnerName            []AccountReference16Ch `json:"ownerName,omitempty"`
	TrustedBeneficiaries []AccountReference16Ch `json:"trustedBeneficiaries,omitempty"`
}
