package shared

// ListAdminClusterMembershipsResponse
// Response message for the `GkeHub.ListAdminClusterMemberships` method.
type ListAdminClusterMembershipsResponse struct {
	AdminClusterMemberships []Membership `json:"adminClusterMemberships,omitempty"`
	NextPageToken           *string      `json:"nextPageToken,omitempty"`
	Unreachable             []string     `json:"unreachable,omitempty"`
}
