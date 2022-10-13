package shared

type ClientData struct {
	Key      *string        `json:"key"`
	Metadata *FieldMetadata `json:"metadata"`
	Value    *string        `json:"value"`
}
