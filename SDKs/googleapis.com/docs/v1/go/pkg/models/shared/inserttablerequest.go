package shared

// InsertTableRequest
// Inserts a table at the specified location. A newline character will be inserted before the inserted table.
type InsertTableRequest struct {
	Columns              *int32                `json:"columns,omitempty"`
	EndOfSegmentLocation *EndOfSegmentLocation `json:"endOfSegmentLocation,omitempty"`
	Location             *Location             `json:"location,omitempty"`
	Rows                 *int32                `json:"rows,omitempty"`
}
