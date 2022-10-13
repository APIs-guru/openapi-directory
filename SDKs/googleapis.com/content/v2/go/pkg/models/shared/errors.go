package shared

type Errors struct {
	Code    *int64  `json:"code"`
	Errors  []Error `json:"errors"`
	Message *string `json:"message"`
}
