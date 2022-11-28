package shared

// NodeInfo
// Node specific properties.
type NodeInfo struct {
	ID   *string `json:"id,omitempty"`
	Zone *string `json:"zone,omitempty"`
}
