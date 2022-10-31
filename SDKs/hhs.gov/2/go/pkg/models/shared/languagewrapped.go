package shared

type LanguageWrapped struct {
	Callback *string    `json:"callback,omitempty"`
	Meta     *Meta      `json:"meta,omitempty"`
	Results  []Language `json:"results,omitempty"`
}
