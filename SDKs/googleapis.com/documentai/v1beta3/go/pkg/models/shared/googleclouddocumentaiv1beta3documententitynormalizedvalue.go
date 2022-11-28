package shared

// GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValue
// Parsed and normalized entity value.
type GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValue struct {
	AddressValue  *GoogleTypePostalAddress `json:"addressValue,omitempty"`
	BooleanValue  *bool                    `json:"booleanValue,omitempty"`
	DateValue     *GoogleTypeDate          `json:"dateValue,omitempty"`
	DatetimeValue *GoogleTypeDateTime      `json:"datetimeValue,omitempty"`
	FloatValue    *float32                 `json:"floatValue,omitempty"`
	IntegerValue  *int32                   `json:"integerValue,omitempty"`
	MoneyValue    *GoogleTypeMoney         `json:"moneyValue,omitempty"`
	Text          *string                  `json:"text,omitempty"`
}
