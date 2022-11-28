package shared

// MoveDimensionRequest
// Moves one or more rows or columns.
type MoveDimensionRequest struct {
	DestinationIndex *int32          `json:"destinationIndex,omitempty"`
	Source           *DimensionRange `json:"source,omitempty"`
}
