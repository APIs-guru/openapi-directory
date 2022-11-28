package shared

// ReadOnly
// Options specific to read-only transactions.
type ReadOnly struct {
	ReadTime *string `json:"readTime,omitempty"`
}
