package shared

type Item struct {
	Issues []RichResultsIssue `json:"issues"`
	Name   *string            `json:"name"`
}
