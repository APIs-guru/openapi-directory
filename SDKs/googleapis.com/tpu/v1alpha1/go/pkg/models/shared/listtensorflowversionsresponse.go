package shared

// ListTensorFlowVersionsResponse
// Response for ListTensorFlowVersions.
type ListTensorFlowVersionsResponse struct {
	NextPageToken      *string             `json:"nextPageToken,omitempty"`
	TensorflowVersions []TensorFlowVersion `json:"tensorflowVersions,omitempty"`
	Unreachable        []string            `json:"unreachable,omitempty"`
}
