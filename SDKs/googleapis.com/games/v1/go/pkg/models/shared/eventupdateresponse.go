package shared

type EventUpdateResponse struct {
	BatchFailures []EventBatchRecordFailure `json:"batchFailures"`
	EventFailures []EventRecordFailure      `json:"eventFailures"`
	Kind          *string                   `json:"kind"`
	PlayerEvents  []PlayerEvent             `json:"playerEvents"`
}
