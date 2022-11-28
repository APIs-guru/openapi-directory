package shared

// SearchOrganizationsRequest
// The request sent to the `SearchOrganizations` method.
type SearchOrganizationsRequest struct {
	Filter    *string `json:"filter,omitempty"`
	PageSize  *int32  `json:"pageSize,omitempty"`
	PageToken *string `json:"pageToken,omitempty"`
}
