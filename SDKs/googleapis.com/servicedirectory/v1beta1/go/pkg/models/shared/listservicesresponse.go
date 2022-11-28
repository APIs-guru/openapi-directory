package shared

// ListServicesResponse
// The response message for RegistrationService.ListServices.
type ListServicesResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Services      []Service `json:"services,omitempty"`
}
