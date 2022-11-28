package shared

// Sink
// A sink that records can be encoded and written to.
type Sink struct {
	Codec map[string]interface{} `json:"codec,omitempty"`
	Spec  map[string]interface{} `json:"spec,omitempty"`
}
