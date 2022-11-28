package shared

// SetBasicFilterRequest
// Sets the basic filter associated with a sheet.
type SetBasicFilterRequest struct {
	Filter *BasicFilter `json:"filter,omitempty"`
}
