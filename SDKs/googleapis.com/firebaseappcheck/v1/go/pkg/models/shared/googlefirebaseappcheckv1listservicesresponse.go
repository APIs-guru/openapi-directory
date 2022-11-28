package shared

// GoogleFirebaseAppcheckV1ListServicesResponse
// Response message for the ListServices method.
type GoogleFirebaseAppcheckV1ListServicesResponse struct {
	NextPageToken *string                           `json:"nextPageToken,omitempty"`
	Services      []GoogleFirebaseAppcheckV1Service `json:"services,omitempty"`
}
