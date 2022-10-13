package shared

type EventRecordRequest struct {
	CurrentTimeMillis *string             `json:"currentTimeMillis"`
	Kind              *string             `json:"kind"`
	RequestID         *string             `json:"requestId"`
	TimePeriods       []EventPeriodUpdate `json:"timePeriods"`
}
