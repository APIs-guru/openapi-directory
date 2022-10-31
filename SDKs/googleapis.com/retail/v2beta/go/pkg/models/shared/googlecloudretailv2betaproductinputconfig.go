package shared



type GoogleCloudRetailV2betaProductInputConfig struct {
    BigQuerySource *GoogleCloudRetailV2betaBigQuerySource `json:"bigQuerySource,omitempty"`
    GcsSource *GoogleCloudRetailV2betaGcsSource `json:"gcsSource,omitempty"`
    ProductInlineSource *GoogleCloudRetailV2betaProductInlineSource `json:"productInlineSource,omitempty"`
    
}

