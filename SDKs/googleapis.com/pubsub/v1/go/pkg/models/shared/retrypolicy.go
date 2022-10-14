package shared

type RetryPolicy struct {
	MaximumBackoff *string `json:"maximumBackoff,omitempty"`
	MinimumBackoff *string `json:"minimumBackoff,omitempty"`
}
