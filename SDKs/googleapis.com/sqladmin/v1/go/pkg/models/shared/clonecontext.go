package shared

type CloneContext struct {
	AllocatedIPRange        *string            `json:"allocatedIpRange,omitempty"`
	BinLogCoordinates       *BinLogCoordinates `json:"binLogCoordinates,omitempty"`
	DatabaseNames           []string           `json:"databaseNames,omitempty"`
	DestinationInstanceName *string            `json:"destinationInstanceName,omitempty"`
	Kind                    *string            `json:"kind,omitempty"`
	PitrTimestampMs         *string            `json:"pitrTimestampMs,omitempty"`
	PointInTime             *string            `json:"pointInTime,omitempty"`
}
