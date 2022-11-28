package shared

// PlatformTypesListResponse
// Platform Type List Response
type PlatformTypesListResponse struct {
	Kind          *string        `json:"kind,omitempty"`
	PlatformTypes []PlatformType `json:"platformTypes,omitempty"`
}
