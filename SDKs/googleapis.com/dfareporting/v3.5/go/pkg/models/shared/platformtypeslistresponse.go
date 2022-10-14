package shared

type PlatformTypesListResponse struct {
	Kind          *string        `json:"kind,omitempty"`
	PlatformTypes []PlatformType `json:"platformTypes,omitempty"`
}
