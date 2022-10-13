package shared

type StreamConfig struct {
	BigqueryDestination          *GoogleCloudHealthcareV1FhirBigQueryDestination `json:"bigqueryDestination"`
	DeidentifiedStoreDestination *DeidentifiedStoreDestination                   `json:"deidentifiedStoreDestination"`
	ResourceTypes                []string                                        `json:"resourceTypes"`
}
