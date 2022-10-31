package shared

type SearchOrganizationsResponse struct {
	NextPageToken *string        `json:"nextPageToken,omitempty"`
	Organizations []Organization `json:"organizations,omitempty"`
}
