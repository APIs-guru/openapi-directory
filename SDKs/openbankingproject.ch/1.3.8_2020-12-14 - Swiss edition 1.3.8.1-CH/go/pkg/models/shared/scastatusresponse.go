package shared

type ScaStatusResponse struct {
	PsuMessage             *string       `json:"psuMessage"`
	ScaStatus              ScaStatusEnum `json:"scaStatus"`
	TrustedBeneficiaryFlag *bool         `json:"trustedBeneficiaryFlag"`
}
