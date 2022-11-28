package shared

type SourceAndDestinationDimensionEnum string

const (
	SourceAndDestinationDimensionEnumDimensionUnspecified SourceAndDestinationDimensionEnum = "DIMENSION_UNSPECIFIED"
	SourceAndDestinationDimensionEnumRows                 SourceAndDestinationDimensionEnum = "ROWS"
	SourceAndDestinationDimensionEnumColumns              SourceAndDestinationDimensionEnum = "COLUMNS"
)

// SourceAndDestination
// A combination of a source range and how to extend that source.
type SourceAndDestination struct {
	Dimension  *SourceAndDestinationDimensionEnum `json:"dimension,omitempty"`
	FillLength *int32                             `json:"fillLength,omitempty"`
	Source     *GridRange                         `json:"source,omitempty"`
}
