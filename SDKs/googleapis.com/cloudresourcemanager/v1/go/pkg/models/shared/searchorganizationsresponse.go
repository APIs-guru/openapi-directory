package shared

// SearchOrganizationsResponse
// The response returned from the `SearchOrganizations` method.
type SearchOrganizationsResponse struct {
	NextPageToken *string        `json:"nextPageToken,omitempty"`
	Organizations []Organization `json:"organizations,omitempty"`
}
