package shared

type FileAs struct {
	Metadata *FieldMetadata `json:"metadata"`
	Value    *string        `json:"value"`
}
