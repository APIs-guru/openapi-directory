package shared

type GoogleCloudRetailV2alphaUserEventInputConfig struct {
	BigQuerySource        *GoogleCloudRetailV2alphaBigQuerySource        `json:"bigQuerySource,omitempty"`
	GcsSource             *GoogleCloudRetailV2alphaGcsSource             `json:"gcsSource,omitempty"`
	UserEventInlineSource *GoogleCloudRetailV2alphaUserEventInlineSource `json:"userEventInlineSource,omitempty"`
}
