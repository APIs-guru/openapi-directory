package shared

// OperatingSystemsListResponse
// Operating System List Response
type OperatingSystemsListResponse struct {
	Kind             *string           `json:"kind,omitempty"`
	OperatingSystems []OperatingSystem `json:"operatingSystems,omitempty"`
}
