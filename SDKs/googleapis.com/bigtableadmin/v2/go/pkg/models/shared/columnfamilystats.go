package shared

// ColumnFamilyStats
// Approximate statistics related to a single column family within a table. This information may change rapidly, interpreting these values at a point in time may already preset out-of-date information. Everything below is approximate, unless otherwise specified.
type ColumnFamilyStats struct {
	AverageCellsPerColumn *float64 `json:"averageCellsPerColumn,omitempty"`
	AverageColumnsPerRow  *float64 `json:"averageColumnsPerRow,omitempty"`
	LogicalDataBytes      *string  `json:"logicalDataBytes,omitempty"`
}
