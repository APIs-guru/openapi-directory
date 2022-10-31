package shared

type SearchFirebaseAppsResponse struct {
	Apps          []FirebaseAppInfo `json:"apps,omitempty"`
	NextPageToken *string           `json:"nextPageToken,omitempty"`
}
