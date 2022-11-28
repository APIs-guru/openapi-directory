package shared

// GoogleCloudRetailV2PurgeUserEventsRequest
// Request message for PurgeUserEvents method.
type GoogleCloudRetailV2PurgeUserEventsRequest struct {
	Filter *string `json:"filter,omitempty"`
	Force  *bool   `json:"force,omitempty"`
}
