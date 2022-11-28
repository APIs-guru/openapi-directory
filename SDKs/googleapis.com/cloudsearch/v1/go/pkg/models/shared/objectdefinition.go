package shared

// ObjectDefinition
// The definition for an object within a data source.
type ObjectDefinition struct {
	Name                *string              `json:"name,omitempty"`
	Options             *ObjectOptions       `json:"options,omitempty"`
	PropertyDefinitions []PropertyDefinition `json:"propertyDefinitions,omitempty"`
}
