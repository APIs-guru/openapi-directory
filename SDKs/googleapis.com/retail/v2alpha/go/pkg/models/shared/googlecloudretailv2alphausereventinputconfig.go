package shared

// GoogleCloudRetailV2alphaUserEventInputConfigInput
// The input config source for user events.
type GoogleCloudRetailV2alphaUserEventInputConfigInput struct {
	BigQuerySource        *GoogleCloudRetailV2alphaBigQuerySource             `json:"bigQuerySource,omitempty"`
	GcsSource             *GoogleCloudRetailV2alphaGcsSource                  `json:"gcsSource,omitempty"`
	UserEventInlineSource *GoogleCloudRetailV2alphaUserEventInlineSourceInput `json:"userEventInlineSource,omitempty"`
}
