package shared

type GoogleCloudRetailV2UserEventInputConfig struct {
	BigQuerySource        *GoogleCloudRetailV2BigQuerySource        `json:"bigQuerySource"`
	GcsSource             *GoogleCloudRetailV2GcsSource             `json:"gcsSource"`
	UserEventInlineSource *GoogleCloudRetailV2UserEventInlineSource `json:"userEventInlineSource"`
}
