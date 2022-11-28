package shared

// HeldMailQuery
// Query options for Gmail holds.
type HeldMailQuery struct {
	EndTime   *string `json:"endTime,omitempty"`
	StartTime *string `json:"startTime,omitempty"`
	Terms     *string `json:"terms,omitempty"`
}
