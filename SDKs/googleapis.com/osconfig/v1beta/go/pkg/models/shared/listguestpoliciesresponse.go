package shared

type ListGuestPoliciesResponse struct {
	GuestPolicies []GuestPolicy `json:"guestPolicies"`
	NextPageToken *string       `json:"nextPageToken"`
}
