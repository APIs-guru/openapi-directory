package shared

type ItemStructuredData struct {
	Hash   *string               `json:"hash,omitempty"`
	Object *StructuredDataObject `json:"object,omitempty"`
}
