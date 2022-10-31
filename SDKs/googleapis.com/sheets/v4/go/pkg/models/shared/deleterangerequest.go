package shared

type DeleteRangeRequestShiftDimensionEnum string

const (
	DeleteRangeRequestShiftDimensionEnumDimensionUnspecified DeleteRangeRequestShiftDimensionEnum = "DIMENSION_UNSPECIFIED"
	DeleteRangeRequestShiftDimensionEnumRows                 DeleteRangeRequestShiftDimensionEnum = "ROWS"
	DeleteRangeRequestShiftDimensionEnumColumns              DeleteRangeRequestShiftDimensionEnum = "COLUMNS"
)

type DeleteRangeRequest struct {
	Range          *GridRange                            `json:"range,omitempty"`
	ShiftDimension *DeleteRangeRequestShiftDimensionEnum `json:"shiftDimension,omitempty"`
}
