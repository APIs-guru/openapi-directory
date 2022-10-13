package shared

type AppendDimensionRequestDimensionEnum string

const (
	AppendDimensionRequestDimensionEnumDimensionUnspecified AppendDimensionRequestDimensionEnum = "DIMENSION_UNSPECIFIED"
	AppendDimensionRequestDimensionEnumRows                 AppendDimensionRequestDimensionEnum = "ROWS"
	AppendDimensionRequestDimensionEnumColumns              AppendDimensionRequestDimensionEnum = "COLUMNS"
)

type AppendDimensionRequest struct {
	Dimension *AppendDimensionRequestDimensionEnum `json:"dimension"`
	Length    *int32                               `json:"length"`
	SheetID   *int32                               `json:"sheetId"`
}
