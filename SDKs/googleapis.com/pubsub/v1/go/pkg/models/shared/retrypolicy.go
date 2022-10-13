package shared

type RetryPolicy struct {
	MaximumBackoff *string `json:"maximumBackoff"`
	MinimumBackoff *string `json:"minimumBackoff"`
}
