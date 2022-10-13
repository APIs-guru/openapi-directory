package shared

type TypeInfo struct {
	Description       *string             `json:"description"`
	DocumentationLink *string             `json:"documentationLink"`
	Kind              *string             `json:"kind"`
	Name              *string             `json:"name"`
	Schema            *TypeInfoSchemaInfo `json:"schema"`
	SelfLink          *string             `json:"selfLink"`
	Title             *string             `json:"title"`
}
