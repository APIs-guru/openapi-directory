package shared

// NodePoolDefaults
// Subset of Nodepool message that has defaults.
type NodePoolDefaults struct {
	NodeConfigDefaults *NodeConfigDefaults `json:"nodeConfigDefaults,omitempty"`
}
