package shared

type CustomGroup struct {
	Attributes []CustomAttribute `json:"attributes"`
	Name       *string           `json:"name"`
}
