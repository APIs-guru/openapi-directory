package shared

type DimensionRangeDimensionEnum string

const (
	DimensionRangeDimensionEnumDimensionUnspecified DimensionRangeDimensionEnum = "DIMENSION_UNSPECIFIED"
	DimensionRangeDimensionEnumRows                 DimensionRangeDimensionEnum = "ROWS"
	DimensionRangeDimensionEnumColumns              DimensionRangeDimensionEnum = "COLUMNS"
)

// DimensionRange
// A range along a single dimension on a sheet. All indexes are zero-based. Indexes are half open: the start index is inclusive and the end index is exclusive. Missing indexes indicate the range is unbounded on that side.
type DimensionRange struct {
	Dimension  *DimensionRangeDimensionEnum `json:"dimension,omitempty"`
	EndIndex   *int32                       `json:"endIndex,omitempty"`
	SheetID    *int32                       `json:"sheetId,omitempty"`
	StartIndex *int32                       `json:"startIndex,omitempty"`
}
