package shared

type UserDefined struct {
	Key      *string        `json:"key"`
	Metadata *FieldMetadata `json:"metadata"`
	Value    *string        `json:"value"`
}
