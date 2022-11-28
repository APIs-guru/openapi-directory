package shared

// ListMembershipsResponse
// The response message for MembershipsService.ListMemberships.
type ListMembershipsResponse struct {
	Memberships   []Membership `json:"memberships,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
