package shared

type ListWebAppsResponse struct {
	Apps          []WebApp `json:"apps,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
