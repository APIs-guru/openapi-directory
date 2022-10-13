package shared

type ListWebAppsResponse struct {
	Apps          []WebApp `json:"apps"`
	NextPageToken *string  `json:"nextPageToken"`
}
