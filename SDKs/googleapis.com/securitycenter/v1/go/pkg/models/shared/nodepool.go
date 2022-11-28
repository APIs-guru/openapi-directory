package shared

// NodePool
// Provides GKE Node Pool information.
type NodePool struct {
	Name  *string `json:"name,omitempty"`
	Nodes []Node  `json:"nodes,omitempty"`
}
