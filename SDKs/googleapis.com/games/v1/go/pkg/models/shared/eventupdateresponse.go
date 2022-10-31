package shared

type EventUpdateResponse struct {
	BatchFailures []EventBatchRecordFailure `json:"batchFailures,omitempty"`
	EventFailures []EventRecordFailure      `json:"eventFailures,omitempty"`
	Kind          *string                   `json:"kind,omitempty"`
	PlayerEvents  []PlayerEvent             `json:"playerEvents,omitempty"`
}
