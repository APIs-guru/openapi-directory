package shared

type PropertyDefinition struct {
	BooleanPropertyOptions   *BooleanPropertyOptions   `json:"booleanPropertyOptions,omitempty"`
	DatePropertyOptions      *DatePropertyOptions      `json:"datePropertyOptions,omitempty"`
	DisplayOptions           *PropertyDisplayOptions   `json:"displayOptions,omitempty"`
	DoublePropertyOptions    *DoublePropertyOptions    `json:"doublePropertyOptions,omitempty"`
	EnumPropertyOptions      *EnumPropertyOptions      `json:"enumPropertyOptions,omitempty"`
	HTMLPropertyOptions      *HTMLPropertyOptions      `json:"htmlPropertyOptions,omitempty"`
	IntegerPropertyOptions   *IntegerPropertyOptions   `json:"integerPropertyOptions,omitempty"`
	IsFacetable              *bool                     `json:"isFacetable,omitempty"`
	IsRepeatable             *bool                     `json:"isRepeatable,omitempty"`
	IsReturnable             *bool                     `json:"isReturnable,omitempty"`
	IsSortable               *bool                     `json:"isSortable,omitempty"`
	IsSuggestable            *bool                     `json:"isSuggestable,omitempty"`
	IsWildcardSearchable     *bool                     `json:"isWildcardSearchable,omitempty"`
	Name                     *string                   `json:"name,omitempty"`
	ObjectPropertyOptions    *ObjectPropertyOptions    `json:"objectPropertyOptions,omitempty"`
	TextPropertyOptions      *TextPropertyOptions      `json:"textPropertyOptions,omitempty"`
	TimestampPropertyOptions *TimestampPropertyOptions `json:"timestampPropertyOptions,omitempty"`
}
