package shared

type GoogleCloudRunV2HTTPGetAction struct {
	Host        *string                      `json:"host"`
	HTTPHeaders []GoogleCloudRunV2HTTPHeader `json:"httpHeaders"`
	Path        *string                      `json:"path"`
	Scheme      *string                      `json:"scheme"`
}
