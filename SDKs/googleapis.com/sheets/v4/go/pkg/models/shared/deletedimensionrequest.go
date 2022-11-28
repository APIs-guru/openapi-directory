package shared

// DeleteDimensionRequest
// Deletes the dimensions from the sheet.
type DeleteDimensionRequest struct {
	Range *DimensionRange `json:"range,omitempty"`
}
