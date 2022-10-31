package shared



type GoogleCloudRetailV2alphaProductInputConfig struct {
    BigQuerySource *GoogleCloudRetailV2alphaBigQuerySource `json:"bigQuerySource,omitempty"`
    GcsSource *GoogleCloudRetailV2alphaGcsSource `json:"gcsSource,omitempty"`
    ProductInlineSource *GoogleCloudRetailV2alphaProductInlineSource `json:"productInlineSource,omitempty"`
    
}

