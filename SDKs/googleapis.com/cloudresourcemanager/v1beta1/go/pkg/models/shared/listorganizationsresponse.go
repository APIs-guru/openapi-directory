package shared

// ListOrganizationsResponse
// The response returned from the `ListOrganizations` method.
type ListOrganizationsResponse struct {
	NextPageToken *string        `json:"nextPageToken,omitempty"`
	Organizations []Organization `json:"organizations,omitempty"`
}
