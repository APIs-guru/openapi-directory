package shared

type Header struct {
	Glob    *string           `json:"glob"`
	Headers map[string]string `json:"headers"`
	Regex   *string           `json:"regex"`
}
