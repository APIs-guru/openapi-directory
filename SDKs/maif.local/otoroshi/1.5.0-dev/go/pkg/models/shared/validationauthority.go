package shared

type ValidationAuthority struct {
	AlwaysValid bool              `json:"alwaysValid"`
	BadTTL      int64             `json:"badTtl"`
	Description string            `json:"description"`
	GoodTTL     int64             `json:"goodTtl"`
	Headers     map[string]string `json:"headers"`
	Host        string            `json:"host"`
	ID          string            `json:"id"`
	Method      string            `json:"method"`
	Name        string            `json:"name"`
	NoCache     bool              `json:"noCache"`
	Path        string            `json:"path"`
	Timeout     int64             `json:"timeout"`
	URL         string            `json:"url"`
}
