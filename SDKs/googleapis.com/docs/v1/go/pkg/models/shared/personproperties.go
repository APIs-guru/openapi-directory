package shared

// PersonProperties
// Properties specific to a linked Person.
type PersonProperties struct {
	Email *string `json:"email,omitempty"`
	Name  *string `json:"name,omitempty"`
}
