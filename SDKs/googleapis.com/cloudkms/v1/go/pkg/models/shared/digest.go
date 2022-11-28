package shared

// Digest
// A Digest holds a cryptographic message digest.
type Digest struct {
	Sha256 *string `json:"sha256,omitempty"`
	Sha384 *string `json:"sha384,omitempty"`
	Sha512 *string `json:"sha512,omitempty"`
}
