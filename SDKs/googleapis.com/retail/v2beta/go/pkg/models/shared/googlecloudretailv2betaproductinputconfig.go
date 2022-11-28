package shared

// GoogleCloudRetailV2betaProductInputConfigInput
// The input config source for products.
type GoogleCloudRetailV2betaProductInputConfigInput struct {
	BigQuerySource      *GoogleCloudRetailV2betaBigQuerySource           `json:"bigQuerySource,omitempty"`
	GcsSource           *GoogleCloudRetailV2betaGcsSource                `json:"gcsSource,omitempty"`
	ProductInlineSource *GoogleCloudRetailV2betaProductInlineSourceInput `json:"productInlineSource,omitempty"`
}
