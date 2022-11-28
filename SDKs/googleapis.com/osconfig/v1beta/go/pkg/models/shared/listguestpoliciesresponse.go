package shared

// ListGuestPoliciesResponse
// A response message for listing guest policies.
type ListGuestPoliciesResponse struct {
	GuestPolicies []GuestPolicy `json:"guestPolicies,omitempty"`
	NextPageToken *string       `json:"nextPageToken,omitempty"`
}
