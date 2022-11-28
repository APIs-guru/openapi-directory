package shared

// GoogleFirebaseAppcheckV1betaListServicesResponse
// Response message for the ListServices method.
type GoogleFirebaseAppcheckV1betaListServicesResponse struct {
	NextPageToken *string                               `json:"nextPageToken,omitempty"`
	Services      []GoogleFirebaseAppcheckV1betaService `json:"services,omitempty"`
}
