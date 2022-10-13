package shared

type SignBlobResponse struct {
	KeyID     *string `json:"keyId"`
	Signature *string `json:"signature"`
}
