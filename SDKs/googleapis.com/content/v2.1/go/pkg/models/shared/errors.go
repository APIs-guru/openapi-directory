package shared

type Errors struct {
	Code    *int64  `json:"code,omitempty"`
	Errors  []Error `json:"errors,omitempty"`
	Message *string `json:"message,omitempty"`
}
