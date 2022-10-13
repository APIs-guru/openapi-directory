package shared

type InsertRangeRequestShiftDimensionEnum string

const (
	InsertRangeRequestShiftDimensionEnumDimensionUnspecified InsertRangeRequestShiftDimensionEnum = "DIMENSION_UNSPECIFIED"
	InsertRangeRequestShiftDimensionEnumRows                 InsertRangeRequestShiftDimensionEnum = "ROWS"
	InsertRangeRequestShiftDimensionEnumColumns              InsertRangeRequestShiftDimensionEnum = "COLUMNS"
)

type InsertRangeRequest struct {
	Range          *GridRange                            `json:"range"`
	ShiftDimension *InsertRangeRequestShiftDimensionEnum `json:"shiftDimension"`
}
