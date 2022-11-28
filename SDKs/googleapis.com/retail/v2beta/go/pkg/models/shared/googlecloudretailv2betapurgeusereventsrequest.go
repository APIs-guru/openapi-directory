package shared

// GoogleCloudRetailV2betaPurgeUserEventsRequest
// Request message for PurgeUserEvents method.
type GoogleCloudRetailV2betaPurgeUserEventsRequest struct {
	Filter *string `json:"filter,omitempty"`
	Force  *bool   `json:"force,omitempty"`
}
