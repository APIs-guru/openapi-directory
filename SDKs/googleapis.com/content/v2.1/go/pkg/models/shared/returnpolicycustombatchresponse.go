package shared

type ReturnpolicyCustomBatchResponse struct {
	Entries []ReturnpolicyCustomBatchResponseEntry `json:"entries,omitempty"`
	Kind    *string                                `json:"kind,omitempty"`
}
