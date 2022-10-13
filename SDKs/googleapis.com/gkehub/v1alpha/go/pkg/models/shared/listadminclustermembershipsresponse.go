package shared

type ListAdminClusterMembershipsResponse struct {
	AdminClusterMemberships []Membership `json:"adminClusterMemberships"`
	NextPageToken           *string      `json:"nextPageToken"`
	Unreachable             []string     `json:"unreachable"`
}
