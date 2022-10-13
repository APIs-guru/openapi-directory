package shared

type GoogleCloudRetailV2betaProductInputConfig struct {
	BigQuerySource      *GoogleCloudRetailV2betaBigQuerySource      `json:"bigQuerySource"`
	GcsSource           *GoogleCloudRetailV2betaGcsSource           `json:"gcsSource"`
	ProductInlineSource *GoogleCloudRetailV2betaProductInlineSource `json:"productInlineSource"`
}
