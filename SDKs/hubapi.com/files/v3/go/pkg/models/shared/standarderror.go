package shared

type StandardError struct {
	Category    ErrorCategory          `json:"category"`
	Context     map[string][]string    `json:"context"`
	Errors      []ErrorDetail          `json:"errors"`
	ID          *string                `json:"id"`
	Links       map[string]string      `json:"links"`
	Message     string                 `json:"message"`
	Status      string                 `json:"status"`
	SubCategory map[string]interface{} `json:"subCategory"`
}
