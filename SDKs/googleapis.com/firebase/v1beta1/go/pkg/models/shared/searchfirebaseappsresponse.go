package shared

type SearchFirebaseAppsResponse struct {
	Apps          []FirebaseAppInfo `json:"apps"`
	NextPageToken *string           `json:"nextPageToken"`
}
