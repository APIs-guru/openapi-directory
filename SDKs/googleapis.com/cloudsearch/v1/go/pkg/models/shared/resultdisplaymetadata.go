package shared

type ResultDisplayMetadata struct {
	Metalines       []ResultDisplayLine `json:"metalines"`
	ObjectTypeLabel *string             `json:"objectTypeLabel"`
}
