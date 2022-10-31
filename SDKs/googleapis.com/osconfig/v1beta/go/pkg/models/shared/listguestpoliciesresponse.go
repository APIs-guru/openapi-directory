package shared



type ListGuestPoliciesResponse struct {
    GuestPolicies []GuestPolicy `json:"guestPolicies,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

