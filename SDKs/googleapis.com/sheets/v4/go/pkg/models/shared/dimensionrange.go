package shared

type DimensionRangeDimensionEnum string

const (
	DimensionRangeDimensionEnumDimensionUnspecified DimensionRangeDimensionEnum = "DIMENSION_UNSPECIFIED"
	DimensionRangeDimensionEnumRows                 DimensionRangeDimensionEnum = "ROWS"
	DimensionRangeDimensionEnumColumns              DimensionRangeDimensionEnum = "COLUMNS"
)

type DimensionRange struct {
	Dimension  *DimensionRangeDimensionEnum `json:"dimension"`
	EndIndex   *int32                       `json:"endIndex"`
	SheetID    *int32                       `json:"sheetId"`
	StartIndex *int32                       `json:"startIndex"`
}
