package shared

type AppendDimensionRequestDimensionEnum string

const (
	AppendDimensionRequestDimensionEnumDimensionUnspecified AppendDimensionRequestDimensionEnum = "DIMENSION_UNSPECIFIED"
	AppendDimensionRequestDimensionEnumRows                 AppendDimensionRequestDimensionEnum = "ROWS"
	AppendDimensionRequestDimensionEnumColumns              AppendDimensionRequestDimensionEnum = "COLUMNS"
)

type AppendDimensionRequest struct {
	Dimension *AppendDimensionRequestDimensionEnum `json:"dimension,omitempty"`
	Length    *int32                               `json:"length,omitempty"`
	SheetID   *int32                               `json:"sheetId,omitempty"`
}
