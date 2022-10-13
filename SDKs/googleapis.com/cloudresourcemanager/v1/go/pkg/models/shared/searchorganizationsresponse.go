package shared

type SearchOrganizationsResponse struct {
	NextPageToken *string        `json:"nextPageToken"`
	Organizations []Organization `json:"organizations"`
}
