package shared

type ListOrgMembershipsResponse struct {
	NextPageToken  *string         `json:"nextPageToken"`
	OrgMemberships []OrgMembership `json:"orgMemberships"`
}
