package shared

// NestingLevel
// Contains properties describing the look and feel of a list bullet at a given level of nesting.
type NestingLevel struct {
	BulletStyle *TextStyle `json:"bulletStyle,omitempty"`
}
