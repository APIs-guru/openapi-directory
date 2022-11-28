package shared

// ReimageNodeRequest
// Request for ReimageNode.
type ReimageNodeRequest struct {
	TensorflowVersion *string `json:"tensorflowVersion,omitempty"`
}
