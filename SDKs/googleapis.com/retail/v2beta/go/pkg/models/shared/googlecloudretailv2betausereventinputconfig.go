package shared



type GoogleCloudRetailV2betaUserEventInputConfig struct {
    BigQuerySource *GoogleCloudRetailV2betaBigQuerySource `json:"bigQuerySource,omitempty"`
    GcsSource *GoogleCloudRetailV2betaGcsSource `json:"gcsSource,omitempty"`
    UserEventInlineSource *GoogleCloudRetailV2betaUserEventInlineSource `json:"userEventInlineSource,omitempty"`
    
}

