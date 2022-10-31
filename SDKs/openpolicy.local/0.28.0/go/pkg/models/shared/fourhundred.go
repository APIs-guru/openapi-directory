package shared

type FourHundred struct {
	Code    string        `json:"code"`
	Errors  []interface{} `json:"errors,omitempty"`
	Message string        `json:"message"`
}
