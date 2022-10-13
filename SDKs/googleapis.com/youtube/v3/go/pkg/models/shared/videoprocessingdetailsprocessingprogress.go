package shared

type VideoProcessingDetailsProcessingProgress struct {
	PartsProcessed *string `json:"partsProcessed"`
	PartsTotal     *string `json:"partsTotal"`
	TimeLeftMs     *string `json:"timeLeftMs"`
}
