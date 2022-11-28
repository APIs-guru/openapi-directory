package shared

// TableStats
// Approximate statistics related to a table. These statistics are calculated infrequently, while simultaneously, data in the table can change rapidly. Thus the values reported here (e.g. row count) are very likely out-of date, even the instant they are received in this API. Thus, only treat these values as approximate. IMPORTANT: Everything below is approximate, unless otherwise specified.
type TableStats struct {
	AverageCellsPerColumn *float64 `json:"averageCellsPerColumn,omitempty"`
	AverageColumnsPerRow  *float64 `json:"averageColumnsPerRow,omitempty"`
	LogicalDataBytes      *string  `json:"logicalDataBytes,omitempty"`
	RowCount              *string  `json:"rowCount,omitempty"`
}
