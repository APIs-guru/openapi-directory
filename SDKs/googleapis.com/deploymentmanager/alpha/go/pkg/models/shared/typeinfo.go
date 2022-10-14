package shared

type TypeInfo struct {
	Description       *string             `json:"description,omitempty"`
	DocumentationLink *string             `json:"documentationLink,omitempty"`
	Kind              *string             `json:"kind,omitempty"`
	Name              *string             `json:"name,omitempty"`
	Schema            *TypeInfoSchemaInfo `json:"schema,omitempty"`
	SelfLink          *string             `json:"selfLink,omitempty"`
	Title             *string             `json:"title,omitempty"`
}
