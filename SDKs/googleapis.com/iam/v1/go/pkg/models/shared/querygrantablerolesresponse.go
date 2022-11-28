package shared

// QueryGrantableRolesResponse
// The grantable role query response.
type QueryGrantableRolesResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Roles         []Role  `json:"roles,omitempty"`
}
