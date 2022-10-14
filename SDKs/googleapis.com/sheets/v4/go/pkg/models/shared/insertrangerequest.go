package shared

type InsertRangeRequestShiftDimensionEnum string

const (
	InsertRangeRequestShiftDimensionEnumDimensionUnspecified InsertRangeRequestShiftDimensionEnum = "DIMENSION_UNSPECIFIED"
	InsertRangeRequestShiftDimensionEnumRows                 InsertRangeRequestShiftDimensionEnum = "ROWS"
	InsertRangeRequestShiftDimensionEnumColumns              InsertRangeRequestShiftDimensionEnum = "COLUMNS"
)

type InsertRangeRequest struct {
	Range          *GridRange                            `json:"range,omitempty"`
	ShiftDimension *InsertRangeRequestShiftDimensionEnum `json:"shiftDimension,omitempty"`
}
