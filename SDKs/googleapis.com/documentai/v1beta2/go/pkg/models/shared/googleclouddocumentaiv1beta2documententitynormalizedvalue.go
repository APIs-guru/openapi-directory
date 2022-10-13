package shared

type GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue struct {
	AddressValue  *GoogleTypePostalAddress `json:"addressValue"`
	BooleanValue  *bool                    `json:"booleanValue"`
	DateValue     *GoogleTypeDate          `json:"dateValue"`
	DatetimeValue *GoogleTypeDateTime      `json:"datetimeValue"`
	FloatValue    *float32                 `json:"floatValue"`
	IntegerValue  *int32                   `json:"integerValue"`
	MoneyValue    *GoogleTypeMoney         `json:"moneyValue"`
	Text          *string                  `json:"text"`
}
