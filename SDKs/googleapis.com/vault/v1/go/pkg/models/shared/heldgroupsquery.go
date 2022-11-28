package shared

// HeldGroupsQuery
// Query options for group holds.
type HeldGroupsQuery struct {
	EndTime   *string `json:"endTime,omitempty"`
	StartTime *string `json:"startTime,omitempty"`
	Terms     *string `json:"terms,omitempty"`
}
