package shared

// EventRecordRequest
// An event period update resource.
type EventRecordRequest struct {
	CurrentTimeMillis *string             `json:"currentTimeMillis,omitempty"`
	Kind              *string             `json:"kind,omitempty"`
	RequestID         *string             `json:"requestId,omitempty"`
	TimePeriods       []EventPeriodUpdate `json:"timePeriods,omitempty"`
}
