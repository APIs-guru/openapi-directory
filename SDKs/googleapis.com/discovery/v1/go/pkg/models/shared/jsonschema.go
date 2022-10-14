package shared

type JSONSchemaAnnotations struct {
	Required []string `json:"required,omitempty"`
}

type JSONSchemaVariantMap struct {
	DollarRef *string `json:"$ref,omitempty"`
	TypeValue *string `json:"type_value,omitempty"`
}

type JSONSchemaVariant struct {
	Discriminant *string                `json:"discriminant,omitempty"`
	Map          []JSONSchemaVariantMap `json:"map,omitempty"`
}

type JSONSchema struct {
	DollarRef            *string                `json:"$ref,omitempty"`
	AdditionalProperties *JSONSchema            `json:"additionalProperties,omitempty"`
	Annotations          *JSONSchemaAnnotations `json:"annotations,omitempty"`
	Description          *string                `json:"description,omitempty"`
	Enum                 []string               `json:"enum,omitempty"`
	EnumDescriptions     []string               `json:"enumDescriptions,omitempty"`
	Format               *string                `json:"format,omitempty"`
	ID                   *string                `json:"id,omitempty"`
	Items                *JSONSchema            `json:"items,omitempty"`
	Location             *string                `json:"location,omitempty"`
	Maximum              *string                `json:"maximum,omitempty"`
	Minimum              *string                `json:"minimum,omitempty"`
	Pattern              *string                `json:"pattern,omitempty"`
	Properties           map[string]JSONSchema  `json:"properties,omitempty"`
	ReadOnly             *bool                  `json:"readOnly,omitempty"`
	Repeated             *bool                  `json:"repeated,omitempty"`
	Required             *bool                  `json:"required,omitempty"`
	Type                 *string                `json:"type,omitempty"`
	Variant              *JSONSchemaVariant     `json:"variant,omitempty"`
}
