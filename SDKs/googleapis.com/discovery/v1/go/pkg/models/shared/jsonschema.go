package shared

type JSONSchemaAnnotations struct {
	Required []string `json:"required"`
}

type JSONSchemaVariantMap struct {
	DollarRef *string `json:"$ref"`
	TypeValue *string `json:"type_value"`
}

type JSONSchemaVariant struct {
	Discriminant *string                `json:"discriminant"`
	Map          []JSONSchemaVariantMap `json:"map"`
}

type JSONSchema struct {
	DollarRef            *string                `json:"$ref"`
	AdditionalProperties *JSONSchema            `json:"additionalProperties"`
	Annotations          *JSONSchemaAnnotations `json:"annotations"`
	Description          *string                `json:"description"`
	Enum                 []string               `json:"enum"`
	EnumDescriptions     []string               `json:"enumDescriptions"`
	Format               *string                `json:"format"`
	ID                   *string                `json:"id"`
	Items                *JSONSchema            `json:"items"`
	Location             *string                `json:"location"`
	Maximum              *string                `json:"maximum"`
	Minimum              *string                `json:"minimum"`
	Pattern              *string                `json:"pattern"`
	Properties           map[string]JSONSchema  `json:"properties"`
	ReadOnly             *bool                  `json:"readOnly"`
	Repeated             *bool                  `json:"repeated"`
	Required             *bool                  `json:"required"`
	Type                 *string                `json:"type"`
	Variant              *JSONSchemaVariant     `json:"variant"`
}
