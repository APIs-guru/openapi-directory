package shared



type List struct {
    ListID *string `json:"listId,omitempty"`
    NestingLevel map[string]NestingLevel `json:"nestingLevel,omitempty"`
    
}

