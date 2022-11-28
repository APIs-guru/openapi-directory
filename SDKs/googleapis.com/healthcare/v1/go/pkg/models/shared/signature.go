package shared

// Signature
// User signature.
type Signature struct {
	Image         *Image            `json:"image,omitempty"`
	Metadata      map[string]string `json:"metadata,omitempty"`
	SignatureTime *string           `json:"signatureTime,omitempty"`
	UserID        *string           `json:"userId,omitempty"`
}
