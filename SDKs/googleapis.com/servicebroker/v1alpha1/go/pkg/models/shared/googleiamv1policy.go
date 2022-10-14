package shared

type GoogleIamV1Policy struct {
	Bindings []GoogleIamV1Binding `json:"bindings,omitempty"`
	Etag     *string              `json:"etag,omitempty"`
	Version  *int32               `json:"version,omitempty"`
}
