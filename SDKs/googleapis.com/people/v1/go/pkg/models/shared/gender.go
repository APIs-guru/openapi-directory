package shared

type Gender struct {
	AddressMeAs    *string        `json:"addressMeAs"`
	FormattedValue *string        `json:"formattedValue"`
	Metadata       *FieldMetadata `json:"metadata"`
	Value          *string        `json:"value"`
}
