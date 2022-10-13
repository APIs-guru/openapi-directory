package shared

type PropertyDefinition struct {
	BooleanPropertyOptions   *BooleanPropertyOptions   `json:"booleanPropertyOptions"`
	DatePropertyOptions      *DatePropertyOptions      `json:"datePropertyOptions"`
	DisplayOptions           *PropertyDisplayOptions   `json:"displayOptions"`
	DoublePropertyOptions    *DoublePropertyOptions    `json:"doublePropertyOptions"`
	EnumPropertyOptions      *EnumPropertyOptions      `json:"enumPropertyOptions"`
	HTMLPropertyOptions      *HTMLPropertyOptions      `json:"htmlPropertyOptions"`
	IntegerPropertyOptions   *IntegerPropertyOptions   `json:"integerPropertyOptions"`
	IsFacetable              *bool                     `json:"isFacetable"`
	IsRepeatable             *bool                     `json:"isRepeatable"`
	IsReturnable             *bool                     `json:"isReturnable"`
	IsSortable               *bool                     `json:"isSortable"`
	IsSuggestable            *bool                     `json:"isSuggestable"`
	IsWildcardSearchable     *bool                     `json:"isWildcardSearchable"`
	Name                     *string                   `json:"name"`
	ObjectPropertyOptions    *ObjectPropertyOptions    `json:"objectPropertyOptions"`
	TextPropertyOptions      *TextPropertyOptions      `json:"textPropertyOptions"`
	TimestampPropertyOptions *TimestampPropertyOptions `json:"timestampPropertyOptions"`
}
