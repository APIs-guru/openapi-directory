package shared



type Item struct {
    Issues []RichResultsIssue `json:"issues,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

