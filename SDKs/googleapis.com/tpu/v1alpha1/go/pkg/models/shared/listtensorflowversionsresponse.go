package shared

type ListTensorFlowVersionsResponse struct {
	NextPageToken      *string             `json:"nextPageToken"`
	TensorflowVersions []TensorFlowVersion `json:"tensorflowVersions"`
	Unreachable        []string            `json:"unreachable"`
}
