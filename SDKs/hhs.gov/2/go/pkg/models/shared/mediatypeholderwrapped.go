package shared

type MediaTypeHolderWrapped struct {
	Callback *string           `json:"callback"`
	Meta     *Meta             `json:"meta"`
	Results  []MediaTypeHolder `json:"results"`
}
