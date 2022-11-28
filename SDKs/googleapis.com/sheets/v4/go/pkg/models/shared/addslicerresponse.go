package shared

// AddSlicerResponse
// The result of adding a slicer to a spreadsheet.
type AddSlicerResponse struct {
	Slicer *Slicer `json:"slicer,omitempty"`
}
