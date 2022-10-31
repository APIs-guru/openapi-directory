package shared



type SignBlobResponse struct {
    KeyID *string `json:"keyId,omitempty"`
    SignedBlob *string `json:"signedBlob,omitempty"`
    
}

