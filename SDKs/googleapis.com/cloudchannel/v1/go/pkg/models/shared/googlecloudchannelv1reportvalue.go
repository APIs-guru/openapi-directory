package shared

// GoogleCloudChannelV1ReportValue
// A single report value.
type GoogleCloudChannelV1ReportValue struct {
	DateTimeValue *GoogleTypeDateTime `json:"dateTimeValue,omitempty"`
	DateValue     *GoogleTypeDate     `json:"dateValue,omitempty"`
	DecimalValue  *GoogleTypeDecimal  `json:"decimalValue,omitempty"`
	IntValue      *string             `json:"intValue,omitempty"`
	MoneyValue    *GoogleTypeMoney    `json:"moneyValue,omitempty"`
	StringValue   *string             `json:"stringValue,omitempty"`
}
