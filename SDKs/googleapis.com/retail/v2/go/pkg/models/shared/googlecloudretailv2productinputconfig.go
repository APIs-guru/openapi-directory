package shared

type GoogleCloudRetailV2ProductInputConfig struct {
	BigQuerySource      *GoogleCloudRetailV2BigQuerySource      `json:"bigQuerySource"`
	GcsSource           *GoogleCloudRetailV2GcsSource           `json:"gcsSource"`
	ProductInlineSource *GoogleCloudRetailV2ProductInlineSource `json:"productInlineSource"`
}
