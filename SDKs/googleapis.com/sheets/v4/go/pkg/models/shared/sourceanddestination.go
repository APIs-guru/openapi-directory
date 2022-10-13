package shared

type SourceAndDestinationDimensionEnum string

const (
	SourceAndDestinationDimensionEnumDimensionUnspecified SourceAndDestinationDimensionEnum = "DIMENSION_UNSPECIFIED"
	SourceAndDestinationDimensionEnumRows                 SourceAndDestinationDimensionEnum = "ROWS"
	SourceAndDestinationDimensionEnumColumns              SourceAndDestinationDimensionEnum = "COLUMNS"
)

type SourceAndDestination struct {
	Dimension  *SourceAndDestinationDimensionEnum `json:"dimension"`
	FillLength *int32                             `json:"fillLength"`
	Source     *GridRange                         `json:"source"`
}
