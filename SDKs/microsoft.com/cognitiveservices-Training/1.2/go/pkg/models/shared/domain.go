package shared

type Domain struct {
	Exportable *bool   `json:"Exportable"`
	ID         *string `json:"Id"`
	Name       *string `json:"Name"`
}
