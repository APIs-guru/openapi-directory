package shared

// IntegrationDetails
// Integration details of an entry.
type IntegrationDetails struct {
	Details         *string `json:"details,omitempty"`
	IntegrationCode *string `json:"integrationCode,omitempty"`
}
