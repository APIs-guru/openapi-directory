package shared

type CustomGroup struct {
	Attributes []CustomAttribute `json:"attributes,omitempty"`
	Name       *string           `json:"name,omitempty"`
}
