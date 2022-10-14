package shared

type MetadataDto struct {
	InPos  bool       `json:"inPos"`
	Source *SourceDto `json:"source,omitempty"`
}
