package shared

// GoogleCloudMlV1ModelInput
// Represents a machine learning solution. A model can have multiple versions, each of which is a deployed, trained model ready to receive prediction requests. The model itself is just a container.
type GoogleCloudMlV1ModelInput struct {
	DefaultVersion                 *GoogleCloudMlV1VersionInput `json:"defaultVersion,omitempty"`
	Description                    *string                      `json:"description,omitempty"`
	Etag                           *string                      `json:"etag,omitempty"`
	Labels                         map[string]string            `json:"labels,omitempty"`
	Name                           *string                      `json:"name,omitempty"`
	OnlinePredictionConsoleLogging *bool                        `json:"onlinePredictionConsoleLogging,omitempty"`
	OnlinePredictionLogging        *bool                        `json:"onlinePredictionLogging,omitempty"`
	Regions                        []string                     `json:"regions,omitempty"`
}

// GoogleCloudMlV1Model
// Represents a machine learning solution. A model can have multiple versions, each of which is a deployed, trained model ready to receive prediction requests. The model itself is just a container.
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
