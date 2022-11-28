package shared

// MaxPodsConstraint
// Constraints applied to pods.
type MaxPodsConstraint struct {
	MaxPodsPerNode *string `json:"maxPodsPerNode,omitempty"`
}
