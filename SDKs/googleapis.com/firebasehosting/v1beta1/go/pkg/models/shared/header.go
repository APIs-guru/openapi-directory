package shared

type Header struct {
	Glob    *string           `json:"glob,omitempty"`
	Headers map[string]string `json:"headers,omitempty"`
	Regex   *string           `json:"regex,omitempty"`
}
