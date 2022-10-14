package shared

type ReturnaddressCustomBatchResponse struct {
	Entries []ReturnaddressCustomBatchResponseEntry `json:"entries,omitempty"`
	Kind    *string                                 `json:"kind,omitempty"`
}
