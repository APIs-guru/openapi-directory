package shared

type GoogleCloudRetailV2PurgeUserEventsRequest struct {
	Filter *string `json:"filter,omitempty"`
	Force  *bool   `json:"force,omitempty"`
}
