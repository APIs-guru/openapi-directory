package shared

// GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility
// Provides compatibility information for a specific metadata store.
type GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility struct {
	Compatible *bool   `json:"compatible,omitempty"`
	Reason     *string `json:"reason,omitempty"`
}
