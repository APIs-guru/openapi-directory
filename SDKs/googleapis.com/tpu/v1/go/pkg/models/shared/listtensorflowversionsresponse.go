package shared



type ListTensorFlowVersionsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    TensorflowVersions []TensorFlowVersion `json:"tensorflowVersions,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

