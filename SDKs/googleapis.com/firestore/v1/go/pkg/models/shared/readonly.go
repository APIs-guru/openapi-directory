package shared

// ReadOnly
// Options for a transaction that can only be used to read documents.
type ReadOnly struct {
	ReadTime *string `json:"readTime,omitempty"`
}
