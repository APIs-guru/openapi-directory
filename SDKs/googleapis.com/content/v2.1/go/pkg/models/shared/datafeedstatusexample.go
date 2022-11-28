package shared

// DatafeedStatusExample
// An example occurrence for a particular error.
type DatafeedStatusExample struct {
	ItemID     *string `json:"itemId,omitempty"`
	LineNumber *string `json:"lineNumber,omitempty"`
	Value      *string `json:"value,omitempty"`
}
