package shared

type ListOrganizationsResponse struct {
	NextPageToken *string        `json:"nextPageToken"`
	Organizations []Organization `json:"organizations"`
}
