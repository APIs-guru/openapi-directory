package shared

type GoogleFirebaseAppcheckV1ListServicesResponse struct {
	NextPageToken *string                           `json:"nextPageToken"`
	Services      []GoogleFirebaseAppcheckV1Service `json:"services"`
}
