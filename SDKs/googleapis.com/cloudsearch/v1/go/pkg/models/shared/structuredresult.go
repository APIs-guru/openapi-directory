package shared

// StructuredResult
// Structured results that are returned as part of search request.
type StructuredResult struct {
	Person *Person `json:"person,omitempty"`
}
