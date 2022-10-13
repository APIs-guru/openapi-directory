package shared

type ListConsumerOverridesResponse struct {
	NextPageToken *string         `json:"nextPageToken"`
	Overrides     []QuotaOverride `json:"overrides"`
}
