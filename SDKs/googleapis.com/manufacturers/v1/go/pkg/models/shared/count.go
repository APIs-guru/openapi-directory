package shared

// Count
// The number of products in a single package. For more information, see https://support.google.com/manufacturers/answer/6124116#count.
type Count struct {
	Unit  *string `json:"unit,omitempty"`
	Value *string `json:"value,omitempty"`
}
