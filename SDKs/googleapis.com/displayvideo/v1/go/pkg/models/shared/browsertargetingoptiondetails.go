package shared

// BrowserTargetingOptionDetails
// Represents a targetable browser. This will be populated in the browser_details field when targeting_type is `TARGETING_TYPE_BROWSER`.
type BrowserTargetingOptionDetails struct {
	DisplayName *string `json:"displayName,omitempty"`
}
