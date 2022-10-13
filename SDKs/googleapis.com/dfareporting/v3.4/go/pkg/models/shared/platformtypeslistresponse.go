package shared

type PlatformTypesListResponse struct {
	Kind          *string        `json:"kind"`
	PlatformTypes []PlatformType `json:"platformTypes"`
}
