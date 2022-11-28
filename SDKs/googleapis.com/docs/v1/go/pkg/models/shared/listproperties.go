package shared

// ListProperties
// The properties of a list that describe the look and feel of bullets belonging to paragraphs associated with a list.
type ListProperties struct {
	NestingLevels []NestingLevel `json:"nestingLevels,omitempty"`
}
