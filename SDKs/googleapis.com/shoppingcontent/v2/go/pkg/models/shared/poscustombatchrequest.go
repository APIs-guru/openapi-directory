package shared

type PosCustomBatchRequest struct {
	Entries []PosCustomBatchRequestEntry `json:"entries"`
}
