package shared

type ListOrganizationsResponse struct {
	NextPageToken *string        `json:"nextPageToken,omitempty"`
	Organizations []Organization `json:"organizations,omitempty"`
}
