package shared

// GoogleCloudRetailV2alphaPurgeUserEventsRequest
// Request message for PurgeUserEvents method.
type GoogleCloudRetailV2alphaPurgeUserEventsRequest struct {
	Filter *string `json:"filter,omitempty"`
	Force  *bool   `json:"force,omitempty"`
}
