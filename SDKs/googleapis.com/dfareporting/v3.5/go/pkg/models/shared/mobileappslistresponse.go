package shared

// MobileAppsListResponse
// Mobile app List Response
type MobileAppsListResponse struct {
	Kind          *string     `json:"kind,omitempty"`
	MobileApps    []MobileApp `json:"mobileApps,omitempty"`
	NextPageToken *string     `json:"nextPageToken,omitempty"`
}
