package shared

type Policy struct {
	Bindings []Binding `json:"bindings"`
	Etag     *string   `json:"etag"`
	Version  *int32    `json:"version"`
}
