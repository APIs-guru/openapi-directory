package shared

type DimensionRangeDimensionEnum string

const (
	DimensionRangeDimensionEnumDimensionUnspecified DimensionRangeDimensionEnum = "DIMENSION_UNSPECIFIED"
	DimensionRangeDimensionEnumRows                 DimensionRangeDimensionEnum = "ROWS"
	DimensionRangeDimensionEnumColumns              DimensionRangeDimensionEnum = "COLUMNS"
)

type DimensionRange struct {
	Dimension  *DimensionRangeDimensionEnum `json:"dimension,omitempty"`
	EndIndex   *int32                       `json:"endIndex,omitempty"`
	SheetID    *int32                       `json:"sheetId,omitempty"`
	StartIndex *int32                       `json:"startIndex,omitempty"`
}
