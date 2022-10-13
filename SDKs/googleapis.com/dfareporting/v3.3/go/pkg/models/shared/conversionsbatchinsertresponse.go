package shared

type ConversionsBatchInsertResponse struct {
	HasFailures *bool              `json:"hasFailures"`
	Kind        *string            `json:"kind"`
	Status      []ConversionStatus `json:"status"`
}
