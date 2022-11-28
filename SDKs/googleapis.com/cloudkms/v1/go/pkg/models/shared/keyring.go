package shared

// KeyRing
// A KeyRing is a toplevel logical grouping of CryptoKeys.
type KeyRing struct {
	CreateTime *string `json:"createTime,omitempty"`
	Name       *string `json:"name,omitempty"`
}
