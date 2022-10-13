package shared

type ConversionsBatchUpdateResponse struct {
	HasFailures *bool              `json:"hasFailures"`
	Kind        *string            `json:"kind"`
	Status      []ConversionStatus `json:"status"`
}
