package shared

type GoogleCloudRetailV2alphaProductInputConfig struct {
	BigQuerySource      *GoogleCloudRetailV2alphaBigQuerySource      `json:"bigQuerySource"`
	GcsSource           *GoogleCloudRetailV2alphaGcsSource           `json:"gcsSource"`
	ProductInlineSource *GoogleCloudRetailV2alphaProductInlineSource `json:"productInlineSource"`
}
