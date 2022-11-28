package shared

// AdditionalInformationAccess
// Optional if supported by API provider.
//
// Is asking for additional information as added within this structured object.
// The usage of this data element requires at least one of the entries "accounts",
// "transactions" or "balances" also to be contained in the object.
// If detailed accounts are referenced, it is required in addition that any account addressed within
// the additionalInformation attribute is also addressed by at least one of the attributes "accounts",
// "transactions" or "balances".
type AdditionalInformationAccess struct {
	OwnerName            []AccountReference16Ch `json:"ownerName,omitempty"`
	TrustedBeneficiaries []AccountReference16Ch `json:"trustedBeneficiaries,omitempty"`
}
