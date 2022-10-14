package shared

type GoogleCloudMlV1Model struct {
	DefaultVersion                 *GoogleCloudMlV1Version `json:"defaultVersion,omitempty"`
	Description                    *string                 `json:"description,omitempty"`
	Etag                           *string                 `json:"etag,omitempty"`
	Labels                         map[string]string       `json:"labels,omitempty"`
	Name                           *string                 `json:"name,omitempty"`
	OnlinePredictionConsoleLogging *bool                   `json:"onlinePredictionConsoleLogging,omitempty"`
	OnlinePredictionLogging        *bool                   `json:"onlinePredictionLogging,omitempty"`
	Regions                        []string                `json:"regions,omitempty"`
}
