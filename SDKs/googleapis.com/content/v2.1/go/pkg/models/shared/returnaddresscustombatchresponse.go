package shared

type ReturnaddressCustomBatchResponse struct {
	Entries []ReturnaddressCustomBatchResponseEntry `json:"entries"`
	Kind    *string                                 `json:"kind"`
}
