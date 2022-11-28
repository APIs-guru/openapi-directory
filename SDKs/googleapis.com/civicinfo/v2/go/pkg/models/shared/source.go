package shared

// Source
// Contains information about the data source for the element containing it.
type Source struct {
	Name     *string `json:"name,omitempty"`
	Official *bool   `json:"official,omitempty"`
}
