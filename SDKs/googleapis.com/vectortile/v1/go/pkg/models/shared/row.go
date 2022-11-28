package shared

// Row
// A row of altitude points in the elevation grid, ordered from west to east.
type Row struct {
	AltitudeDiffs []int32 `json:"altitudeDiffs,omitempty"`
}
