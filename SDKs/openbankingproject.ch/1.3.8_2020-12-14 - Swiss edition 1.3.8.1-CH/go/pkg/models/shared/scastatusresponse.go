package shared



type ScaStatusResponse struct {
    PsuMessage *string `json:"psuMessage,omitempty"`
    ScaStatus ScaStatusEnum `json:"scaStatus"`
    TrustedBeneficiaryFlag *bool `json:"trustedBeneficiaryFlag,omitempty"`
    
}

