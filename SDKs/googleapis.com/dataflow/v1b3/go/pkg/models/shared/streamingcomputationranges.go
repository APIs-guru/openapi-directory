package shared

// StreamingComputationRanges
// Describes full or partial data disk assignment information of the computation ranges.
type StreamingComputationRanges struct {
	ComputationID    *string                      `json:"computationId,omitempty"`
	RangeAssignments []KeyRangeDataDiskAssignment `json:"rangeAssignments,omitempty"`
}
