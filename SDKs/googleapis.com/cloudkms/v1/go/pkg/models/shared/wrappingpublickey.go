package shared

// WrappingPublicKey
// The public key component of the wrapping key. For details of the type of key this public key corresponds to, see the ImportMethod.
type WrappingPublicKey struct {
	Pem *string `json:"pem,omitempty"`
}
