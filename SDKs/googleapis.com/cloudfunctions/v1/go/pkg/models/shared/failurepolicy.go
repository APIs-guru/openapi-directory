package shared

// FailurePolicy
// Describes the policy in case of function's execution failure. If empty, then defaults to ignoring failures (i.e. not retrying them).
type FailurePolicy struct {
	Retry map[string]interface{} `json:"retry,omitempty"`
}
