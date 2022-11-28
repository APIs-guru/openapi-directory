package shared

// ProjectInfo
// A reference to a Google Cloud Platform (GCP) `Project`.
type ProjectInfo struct {
	DisplayName *string `json:"displayName,omitempty"`
	LocationID  *string `json:"locationId,omitempty"`
	Project     *string `json:"project,omitempty"`
}
