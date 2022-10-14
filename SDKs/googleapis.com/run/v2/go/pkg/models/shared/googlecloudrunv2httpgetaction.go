package shared

type GoogleCloudRunV2HTTPGetAction struct {
	Host        *string                      `json:"host,omitempty"`
	HTTPHeaders []GoogleCloudRunV2HTTPHeader `json:"httpHeaders,omitempty"`
	Path        *string                      `json:"path,omitempty"`
	Scheme      *string                      `json:"scheme,omitempty"`
}
