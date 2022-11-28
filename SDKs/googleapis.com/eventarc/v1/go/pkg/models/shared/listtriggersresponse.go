package shared

// ListTriggersResponse
// The response message for the `ListTriggers` method.
type ListTriggersResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Triggers      []Trigger `json:"triggers,omitempty"`
	Unreachable   []string  `json:"unreachable,omitempty"`
}
