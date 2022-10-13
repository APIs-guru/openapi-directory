package shared

type GoogleCloudRetailV2alphaUserEventInputConfig struct {
	BigQuerySource        *GoogleCloudRetailV2alphaBigQuerySource        `json:"bigQuerySource"`
	GcsSource             *GoogleCloudRetailV2alphaGcsSource             `json:"gcsSource"`
	UserEventInlineSource *GoogleCloudRetailV2alphaUserEventInlineSource `json:"userEventInlineSource"`
}
