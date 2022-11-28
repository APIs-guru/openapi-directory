package shared

type InsertRangeRequestShiftDimensionEnum string

const (
	InsertRangeRequestShiftDimensionEnumDimensionUnspecified InsertRangeRequestShiftDimensionEnum = "DIMENSION_UNSPECIFIED"
	InsertRangeRequestShiftDimensionEnumRows                 InsertRangeRequestShiftDimensionEnum = "ROWS"
	InsertRangeRequestShiftDimensionEnumColumns              InsertRangeRequestShiftDimensionEnum = "COLUMNS"
)

// InsertRangeRequest
// Inserts cells into a range, shifting the existing cells over or down.
type InsertRangeRequest struct {
	Range          *GridRange                            `json:"range,omitempty"`
	ShiftDimension *InsertRangeRequestShiftDimensionEnum `json:"shiftDimension,omitempty"`
}
