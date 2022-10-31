package shared

type ListAdminOverridesResponse struct {
	NextPageToken *string         `json:"nextPageToken,omitempty"`
	Overrides     []QuotaOverride `json:"overrides,omitempty"`
}
