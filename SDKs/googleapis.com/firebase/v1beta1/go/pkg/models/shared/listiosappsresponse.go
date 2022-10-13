package shared

type ListIosAppsResponse struct {
	Apps          []IosApp `json:"apps"`
	NextPageToken *string  `json:"nextPageToken"`
}
