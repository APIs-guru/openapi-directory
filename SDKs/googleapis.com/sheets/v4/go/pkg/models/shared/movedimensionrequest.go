package shared

type MoveDimensionRequest struct {
	DestinationIndex *int32          `json:"destinationIndex"`
	Source           *DimensionRange `json:"source"`
}
