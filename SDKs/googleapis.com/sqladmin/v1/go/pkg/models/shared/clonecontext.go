package shared

type CloneContext struct {
	AllocatedIPRange        *string            `json:"allocatedIpRange"`
	BinLogCoordinates       *BinLogCoordinates `json:"binLogCoordinates"`
	DatabaseNames           []string           `json:"databaseNames"`
	DestinationInstanceName *string            `json:"destinationInstanceName"`
	Kind                    *string            `json:"kind"`
	PitrTimestampMs         *string            `json:"pitrTimestampMs"`
	PointInTime             *string            `json:"pointInTime"`
}
