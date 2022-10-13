package shared

type StreamConfig struct {
	BigqueryDestination          *GoogleCloudHealthcareV1beta1FhirBigQueryDestination `json:"bigqueryDestination"`
	DeidentifiedStoreDestination *DeidentifiedStoreDestination                        `json:"deidentifiedStoreDestination"`
	ResourceTypes                []string                                             `json:"resourceTypes"`
}
