package shared

type GoogleCloudRetailV2betaUserEventInputConfig struct {
	BigQuerySource        *GoogleCloudRetailV2betaBigQuerySource        `json:"bigQuerySource"`
	GcsSource             *GoogleCloudRetailV2betaGcsSource             `json:"gcsSource"`
	UserEventInlineSource *GoogleCloudRetailV2betaUserEventInlineSource `json:"userEventInlineSource"`
}
