package shared

// OperatingSystemVersionsListResponse
// Operating System Version List Response
type OperatingSystemVersionsListResponse struct {
	Kind                    *string                  `json:"kind,omitempty"`
	OperatingSystemVersions []OperatingSystemVersion `json:"operatingSystemVersions,omitempty"`
}
