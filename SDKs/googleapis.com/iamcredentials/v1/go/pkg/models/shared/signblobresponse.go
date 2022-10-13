package shared

type SignBlobResponse struct {
	KeyID      *string `json:"keyId"`
	SignedBlob *string `json:"signedBlob"`
}
