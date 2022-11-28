package shared

// GoogleCloudRunV2HTTPGetAction
// HTTPGetAction describes an action based on HTTP Get requests.
type GoogleCloudRunV2HTTPGetAction struct {
	HTTPHeaders []GoogleCloudRunV2HTTPHeader `json:"httpHeaders,omitempty"`
	Path        *string                      `json:"path,omitempty"`
}
