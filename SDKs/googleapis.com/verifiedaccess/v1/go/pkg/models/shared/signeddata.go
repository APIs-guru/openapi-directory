package shared

// SignedData
// The wrapper message of any data and its signature.
type SignedData struct {
	Data      *string `json:"data,omitempty"`
	Signature *string `json:"signature,omitempty"`
}
