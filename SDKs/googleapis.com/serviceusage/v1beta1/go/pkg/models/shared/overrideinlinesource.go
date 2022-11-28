package shared

// OverrideInlineSource
// Import data embedded in the request message
type OverrideInlineSource struct {
	Overrides []QuotaOverride `json:"overrides,omitempty"`
}
