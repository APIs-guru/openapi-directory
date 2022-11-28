package shared

// List
// A List describes the look and feel of bullets belonging to paragraphs associated with a list. A paragraph that is part of a list has an implicit reference to that list's ID.
type List struct {
	ListID       *string                 `json:"listId,omitempty"`
	NestingLevel map[string]NestingLevel `json:"nestingLevel,omitempty"`
}
