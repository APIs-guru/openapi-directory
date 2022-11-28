package shared

// GoogleCloudRetailV2UserEventInputConfigInput
// The input config source for user events.
type GoogleCloudRetailV2UserEventInputConfigInput struct {
	BigQuerySource        *GoogleCloudRetailV2BigQuerySource             `json:"bigQuerySource,omitempty"`
	GcsSource             *GoogleCloudRetailV2GcsSource                  `json:"gcsSource,omitempty"`
	UserEventInlineSource *GoogleCloudRetailV2UserEventInlineSourceInput `json:"userEventInlineSource,omitempty"`
}
