package shared

type SourceWrapped struct {
	Callback *string  `json:"callback"`
	Meta     *Meta    `json:"meta"`
	Results  []Source `json:"results"`
}
