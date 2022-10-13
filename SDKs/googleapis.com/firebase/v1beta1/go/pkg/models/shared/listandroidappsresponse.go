package shared

type ListAndroidAppsResponse struct {
	Apps          []AndroidApp `json:"apps"`
	NextPageToken *string      `json:"nextPageToken"`
}
