package shared

// ScaStatusResponse
// Body of the JSON response with SCA Status.
type ScaStatusResponse struct {
	PsuMessage             *string       `json:"psuMessage,omitempty"`
	ScaStatus              ScaStatusEnum `json:"scaStatus"`
	TrustedBeneficiaryFlag *bool         `json:"trustedBeneficiaryFlag,omitempty"`
}
