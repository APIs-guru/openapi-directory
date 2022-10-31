package shared



type Digest struct {
    Sha256 *string `json:"sha256,omitempty"`
    Sha384 *string `json:"sha384,omitempty"`
    Sha512 *string `json:"sha512,omitempty"`
    
}

