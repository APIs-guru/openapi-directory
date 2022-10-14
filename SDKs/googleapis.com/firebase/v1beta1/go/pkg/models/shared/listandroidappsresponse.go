package shared

type ListAndroidAppsResponse struct {
	Apps          []AndroidApp `json:"apps,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
