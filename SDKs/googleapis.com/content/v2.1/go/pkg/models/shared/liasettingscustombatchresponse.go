package shared

type LiasettingsCustomBatchResponse struct {
	Entries []LiasettingsCustomBatchResponseEntry `json:"entries"`
	Kind    *string                               `json:"kind"`
}
