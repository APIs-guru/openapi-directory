package shared

// GoogleCloudRetailV2ProductInputConfigInput
// The input config source for products.
type GoogleCloudRetailV2ProductInputConfigInput struct {
	BigQuerySource      *GoogleCloudRetailV2BigQuerySource           `json:"bigQuerySource,omitempty"`
	GcsSource           *GoogleCloudRetailV2GcsSource                `json:"gcsSource,omitempty"`
	ProductInlineSource *GoogleCloudRetailV2ProductInlineSourceInput `json:"productInlineSource,omitempty"`
}
