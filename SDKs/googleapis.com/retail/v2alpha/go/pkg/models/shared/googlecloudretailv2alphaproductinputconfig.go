package shared

// GoogleCloudRetailV2alphaProductInputConfigInput
// The input config source for products.
type GoogleCloudRetailV2alphaProductInputConfigInput struct {
	BigQuerySource      *GoogleCloudRetailV2alphaBigQuerySource           `json:"bigQuerySource,omitempty"`
	GcsSource           *GoogleCloudRetailV2alphaGcsSource                `json:"gcsSource,omitempty"`
	ProductInlineSource *GoogleCloudRetailV2alphaProductInlineSourceInput `json:"productInlineSource,omitempty"`
}
