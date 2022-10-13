package shared

type GoogleCloudMlV1Model struct {
	DefaultVersion                 *GoogleCloudMlV1Version `json:"defaultVersion"`
	Description                    *string                 `json:"description"`
	Etag                           *string                 `json:"etag"`
	Labels                         map[string]string       `json:"labels"`
	Name                           *string                 `json:"name"`
	OnlinePredictionConsoleLogging *bool                   `json:"onlinePredictionConsoleLogging"`
	OnlinePredictionLogging        *bool                   `json:"onlinePredictionLogging"`
	Regions                        []string                `json:"regions"`
}
