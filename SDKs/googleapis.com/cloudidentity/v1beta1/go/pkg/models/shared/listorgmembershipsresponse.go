package shared



type ListOrgMembershipsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    OrgMemberships []OrgMembership `json:"orgMemberships,omitempty"`
    
}

