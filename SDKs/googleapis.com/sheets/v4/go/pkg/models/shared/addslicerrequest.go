package shared

// AddSlicerRequest
// Adds a slicer to a sheet in the spreadsheet.
type AddSlicerRequest struct {
	Slicer *Slicer `json:"slicer,omitempty"`
}
