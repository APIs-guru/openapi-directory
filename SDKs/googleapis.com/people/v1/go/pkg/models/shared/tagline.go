package shared

type Tagline struct {
	Metadata *FieldMetadata `json:"metadata"`
	Value    *string        `json:"value"`
}
