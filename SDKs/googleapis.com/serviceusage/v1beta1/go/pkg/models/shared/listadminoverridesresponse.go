package shared

// ListAdminOverridesResponse
// Response message for ListAdminOverrides.
type ListAdminOverridesResponse struct {
	NextPageToken *string         `json:"nextPageToken,omitempty"`
	Overrides     []QuotaOverride `json:"overrides,omitempty"`
}
