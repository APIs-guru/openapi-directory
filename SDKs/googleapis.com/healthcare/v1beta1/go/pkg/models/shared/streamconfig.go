package shared



type StreamConfig struct {
    BigqueryDestination *GoogleCloudHealthcareV1beta1FhirBigQueryDestination `json:"bigqueryDestination,omitempty"`
    DeidentifiedStoreDestination *DeidentifiedStoreDestination `json:"deidentifiedStoreDestination,omitempty"`
    ResourceTypes []string `json:"resourceTypes,omitempty"`
    
}

