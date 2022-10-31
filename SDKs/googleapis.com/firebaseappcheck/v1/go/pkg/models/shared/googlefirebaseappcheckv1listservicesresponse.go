package shared



type GoogleFirebaseAppcheckV1ListServicesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Services []GoogleFirebaseAppcheckV1Service `json:"services,omitempty"`
    
}

