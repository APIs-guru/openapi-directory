package shared

type KeysMetadataRepresentationKeyMetadataRepresentation struct {
	Algorithm        *string `json:"algorithm"`
	Certificate      *string `json:"certificate"`
	Kid              *string `json:"kid"`
	ProviderID       *string `json:"providerId"`
	ProviderPriority *int64  `json:"providerPriority"`
	PublicKey        *string `json:"publicKey"`
	Status           *string `json:"status"`
	Type             *string `json:"type"`
}
