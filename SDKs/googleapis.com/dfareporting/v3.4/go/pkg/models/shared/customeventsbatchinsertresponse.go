package shared

type CustomEventsBatchInsertResponse struct {
	HasFailures *bool               `json:"hasFailures"`
	Kind        *string             `json:"kind"`
	Status      []CustomEventStatus `json:"status"`
}
