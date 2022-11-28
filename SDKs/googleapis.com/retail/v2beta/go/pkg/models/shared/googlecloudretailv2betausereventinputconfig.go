package shared

// GoogleCloudRetailV2betaUserEventInputConfigInput
// The input config source for user events.
type GoogleCloudRetailV2betaUserEventInputConfigInput struct {
	BigQuerySource        *GoogleCloudRetailV2betaBigQuerySource             `json:"bigQuerySource,omitempty"`
	GcsSource             *GoogleCloudRetailV2betaGcsSource                  `json:"gcsSource,omitempty"`
	UserEventInlineSource *GoogleCloudRetailV2betaUserEventInlineSourceInput `json:"userEventInlineSource,omitempty"`
}
