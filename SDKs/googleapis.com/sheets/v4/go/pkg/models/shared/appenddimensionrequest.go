package shared

type AppendDimensionRequestDimensionEnum string

const (
	AppendDimensionRequestDimensionEnumDimensionUnspecified AppendDimensionRequestDimensionEnum = "DIMENSION_UNSPECIFIED"
	AppendDimensionRequestDimensionEnumRows                 AppendDimensionRequestDimensionEnum = "ROWS"
	AppendDimensionRequestDimensionEnumColumns              AppendDimensionRequestDimensionEnum = "COLUMNS"
)

// AppendDimensionRequest
// Appends rows or columns to the end of a sheet.
type AppendDimensionRequest struct {
	Dimension *AppendDimensionRequestDimensionEnum `json:"dimension,omitempty"`
	Length    *int32                               `json:"length,omitempty"`
	SheetID   *int32                               `json:"sheetId,omitempty"`
}
