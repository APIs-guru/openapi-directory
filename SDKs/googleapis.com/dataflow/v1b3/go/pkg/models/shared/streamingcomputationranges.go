package shared

type StreamingComputationRanges struct {
	ComputationID    *string                      `json:"computationId,omitempty"`
	RangeAssignments []KeyRangeDataDiskAssignment `json:"rangeAssignments,omitempty"`
}
