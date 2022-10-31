package shared

type SignBlobResponse struct {
	KeyID     *string `json:"keyId,omitempty"`
	Signature *string `json:"signature,omitempty"`
}
