package shared

type ListMembershipsResponse struct {
	Memberships   []Membership `json:"memberships,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
