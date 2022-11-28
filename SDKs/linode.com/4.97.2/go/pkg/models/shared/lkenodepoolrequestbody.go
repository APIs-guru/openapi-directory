package shared

// LkeNodePoolRequestBody
// Specifies a collection of Linodes which will be members of a Kubernetes cluster.
type LkeNodePoolRequestBody struct {
	Count *int64   `json:"count,omitempty"`
	Disks []Items  `json:"disks,omitempty"`
	Tags  []string `json:"tags,omitempty"`
	Type  *string  `json:"type,omitempty"`
}
