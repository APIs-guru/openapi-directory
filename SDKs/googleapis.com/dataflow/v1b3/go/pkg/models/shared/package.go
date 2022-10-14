package shared

type Package struct {
	Location *string `json:"location,omitempty"`
	Name     *string `json:"name,omitempty"`
}
