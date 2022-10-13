package shared

type Signature struct {
	Image         *Image            `json:"image"`
	Metadata      map[string]string `json:"metadata"`
	SignatureTime *string           `json:"signatureTime"`
	UserID        *string           `json:"userId"`
}
