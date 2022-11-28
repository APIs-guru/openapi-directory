package shared

// Item
// A specific rich result found on the page.
type Item struct {
	Issues []RichResultsIssue `json:"issues,omitempty"`
	Name   *string            `json:"name,omitempty"`
}
