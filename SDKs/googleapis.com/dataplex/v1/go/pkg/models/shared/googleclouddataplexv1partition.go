package shared

type GoogleCloudDataplexV1Partition struct {
	Etag     *string  `json:"etag,omitempty"`
	Location *string  `json:"location,omitempty"`
	Name     *string  `json:"name,omitempty"`
	Values   []string `json:"values,omitempty"`
}
