package shared



type GoogleCloudRetailV2ProductInputConfig struct {
    BigQuerySource *GoogleCloudRetailV2BigQuerySource `json:"bigQuerySource,omitempty"`
    GcsSource *GoogleCloudRetailV2GcsSource `json:"gcsSource,omitempty"`
    ProductInlineSource *GoogleCloudRetailV2ProductInlineSource `json:"productInlineSource,omitempty"`
    
}

