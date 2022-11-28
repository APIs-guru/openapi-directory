package shared

// GroupResult
// Result containing the properties and count of a groupBy request.
type GroupResult struct {
	Count      *string                `json:"count,omitempty"`
	Properties map[string]interface{} `json:"properties,omitempty"`
}
