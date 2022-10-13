package shared

type LanguageWrapped struct {
	Callback *string    `json:"callback"`
	Meta     *Meta      `json:"meta"`
	Results  []Language `json:"results"`
}
