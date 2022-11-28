package shared

// ListVerificationsResponse
// Response message for Verifications.ListVerifications.
type ListVerificationsResponse struct {
	NextPageToken *string        `json:"nextPageToken,omitempty"`
	Verifications []Verification `json:"verifications,omitempty"`
}
