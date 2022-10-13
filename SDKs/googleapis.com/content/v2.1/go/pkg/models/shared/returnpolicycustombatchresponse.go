package shared

type ReturnpolicyCustomBatchResponse struct {
	Entries []ReturnpolicyCustomBatchResponseEntry `json:"entries"`
	Kind    *string                                `json:"kind"`
}
