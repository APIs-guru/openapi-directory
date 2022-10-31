package shared

type ResultDisplayMetadata struct {
	Metalines       []ResultDisplayLine `json:"metalines,omitempty"`
	ObjectTypeLabel *string             `json:"objectTypeLabel,omitempty"`
}
