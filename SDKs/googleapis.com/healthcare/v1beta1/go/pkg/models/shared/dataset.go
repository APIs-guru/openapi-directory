package shared

// Dataset
// A message representing a health dataset. A health dataset represents a collection of healthcare data pertaining to one or more patients. This may include multiple modalities of healthcare data, such as electronic medical records or medical imaging data.
type Dataset struct {
	Name     *string `json:"name,omitempty"`
	TimeZone *string `json:"timeZone,omitempty"`
}
