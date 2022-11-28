package shared

// ListRegistrationsResponse
// Response for the `ListRegistrations` method.
type ListRegistrationsResponse struct {
	NextPageToken *string        `json:"nextPageToken,omitempty"`
	Registrations []Registration `json:"registrations,omitempty"`
}
