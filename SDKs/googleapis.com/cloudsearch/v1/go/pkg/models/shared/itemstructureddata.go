package shared

// ItemStructuredData
// Available structured data fields for the item.
type ItemStructuredData struct {
	Hash   *string               `json:"hash,omitempty"`
	Object *StructuredDataObject `json:"object,omitempty"`
}
