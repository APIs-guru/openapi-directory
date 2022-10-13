package shared

type GoogleFirebaseAppcheckV1betaListServicesResponse struct {
	NextPageToken *string                               `json:"nextPageToken"`
	Services      []GoogleFirebaseAppcheckV1betaService `json:"services"`
}
