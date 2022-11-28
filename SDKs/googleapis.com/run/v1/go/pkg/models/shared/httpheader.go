package shared

// HTTPHeader
// HTTPHeader describes a custom header to be used in HTTP probes
type HTTPHeader struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}
