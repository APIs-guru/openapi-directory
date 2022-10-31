package shared

type Policy struct {
	Bindings []Binding `json:"bindings,omitempty"`
	Etag     *string   `json:"etag,omitempty"`
	Version  *int32    `json:"version,omitempty"`
}
