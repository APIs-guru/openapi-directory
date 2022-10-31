package shared

type Attributes struct {
	Attributes []Attribute `json:"attributes,omitempty"`
	Name       *string     `json:"name,omitempty"`
}
