package shared

// Group
// An Otoroshi service group is just a group of service descriptor. It is useful to be able to define Api Keys for the whole group
type Group struct {
	Description *string `json:"description,omitempty"`
	ID          string  `json:"id"`
	Name        string  `json:"name"`
}
