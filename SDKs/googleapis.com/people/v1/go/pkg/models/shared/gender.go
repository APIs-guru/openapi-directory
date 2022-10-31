package shared

type Gender struct {
	AddressMeAs    *string        `json:"addressMeAs,omitempty"`
	FormattedValue *string        `json:"formattedValue,omitempty"`
	Metadata       *FieldMetadata `json:"metadata,omitempty"`
	Value          *string        `json:"value,omitempty"`
}
