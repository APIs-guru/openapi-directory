package shared

// Capacity
// The capacity of a product. For more information, see https://support.google.com/manufacturers/answer/6124116#capacity.
type Capacity struct {
	Unit  *string `json:"unit,omitempty"`
	Value *string `json:"value,omitempty"`
}
