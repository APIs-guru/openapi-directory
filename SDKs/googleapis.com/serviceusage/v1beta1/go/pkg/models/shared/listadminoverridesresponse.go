package shared

type ListAdminOverridesResponse struct {
	NextPageToken *string         `json:"nextPageToken"`
	Overrides     []QuotaOverride `json:"overrides"`
}
