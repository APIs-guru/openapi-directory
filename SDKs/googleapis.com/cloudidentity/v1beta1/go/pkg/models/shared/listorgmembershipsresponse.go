package shared

// ListOrgMembershipsResponse
// The response message for OrgMembershipsService.ListOrgMemberships.
type ListOrgMembershipsResponse struct {
	NextPageToken  *string         `json:"nextPageToken,omitempty"`
	OrgMemberships []OrgMembership `json:"orgMemberships,omitempty"`
}
