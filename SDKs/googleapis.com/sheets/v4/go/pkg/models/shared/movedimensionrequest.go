package shared

type MoveDimensionRequest struct {
	DestinationIndex *int32          `json:"destinationIndex,omitempty"`
	Source           *DimensionRange `json:"source,omitempty"`
}
