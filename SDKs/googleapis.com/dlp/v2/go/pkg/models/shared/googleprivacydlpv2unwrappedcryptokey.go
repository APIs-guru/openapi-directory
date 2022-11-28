package shared

// GooglePrivacyDlpV2UnwrappedCryptoKey
// Using raw keys is prone to security risks due to accidentally leaking the key. Choose another type of key if possible.
type GooglePrivacyDlpV2UnwrappedCryptoKey struct {
	Key *string `json:"key,omitempty"`
}
