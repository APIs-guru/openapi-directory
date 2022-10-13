package shared

type MobileAppsListResponse struct {
	Kind          *string     `json:"kind"`
	MobileApps    []MobileApp `json:"mobileApps"`
	NextPageToken *string     `json:"nextPageToken"`
}
