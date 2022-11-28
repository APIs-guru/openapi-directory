package shared

// GoogleCloudDataplexV1Partition
// Represents partition metadata contained within entity instances.
type GoogleCloudDataplexV1Partition struct {
	Etag     *string  `json:"etag,omitempty"`
	Location *string  `json:"location,omitempty"`
	Name     *string  `json:"name,omitempty"`
	Values   []string `json:"values,omitempty"`
}

// GoogleCloudDataplexV1PartitionInput
// Represents partition metadata contained within entity instances.
type GoogleCloudDataplexV1PartitionInput struct {
	Etag     *string  `json:"etag,omitempty"`
	Location *string  `json:"location,omitempty"`
	Values   []string `json:"values,omitempty"`
}
