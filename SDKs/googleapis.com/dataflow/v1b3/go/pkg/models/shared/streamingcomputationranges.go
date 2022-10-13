package shared

type StreamingComputationRanges struct {
	ComputationID    *string                      `json:"computationId"`
	RangeAssignments []KeyRangeDataDiskAssignment `json:"rangeAssignments"`
}
