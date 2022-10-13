package shared

type ObjectDefinition struct {
	Name                *string              `json:"name"`
	Options             *ObjectOptions       `json:"options"`
	PropertyDefinitions []PropertyDefinition `json:"propertyDefinitions"`
}
