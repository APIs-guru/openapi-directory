package shared

type GoogleCloudDataplexV1Partition struct {
	Etag     *string  `json:"etag"`
	Location *string  `json:"location"`
	Name     *string  `json:"name"`
	Values   []string `json:"values"`
}
