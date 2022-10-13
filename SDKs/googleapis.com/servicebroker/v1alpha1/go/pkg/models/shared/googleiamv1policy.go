package shared

type GoogleIamV1Policy struct {
	Bindings []GoogleIamV1Binding `json:"bindings"`
	Etag     *string              `json:"etag"`
	Version  *int32               `json:"version"`
}
