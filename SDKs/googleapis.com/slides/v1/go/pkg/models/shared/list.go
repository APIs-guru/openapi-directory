package shared

type List struct {
	ListID       *string                 `json:"listId"`
	NestingLevel map[string]NestingLevel `json:"nestingLevel"`
}
