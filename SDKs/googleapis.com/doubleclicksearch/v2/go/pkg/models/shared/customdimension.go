package shared

// CustomDimension
// A message containing the custom dimension.
type CustomDimension struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}
