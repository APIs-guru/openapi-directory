package shared

type DeleteRangeRequestShiftDimensionEnum string

const (
	DeleteRangeRequestShiftDimensionEnumDimensionUnspecified DeleteRangeRequestShiftDimensionEnum = "DIMENSION_UNSPECIFIED"
	DeleteRangeRequestShiftDimensionEnumRows                 DeleteRangeRequestShiftDimensionEnum = "ROWS"
	DeleteRangeRequestShiftDimensionEnumColumns              DeleteRangeRequestShiftDimensionEnum = "COLUMNS"
)

// DeleteRangeRequest
// Deletes a range of cells, shifting other cells into the deleted area.
type DeleteRangeRequest struct {
	Range          *GridRange                            `json:"range,omitempty"`
	ShiftDimension *DeleteRangeRequestShiftDimensionEnum `json:"shiftDimension,omitempty"`
}
