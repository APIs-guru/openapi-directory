package shared

type GoogleCloudDatacatalogV1TagField struct {
	BoolValue      *bool                                      `json:"boolValue,omitempty"`
	DisplayName    *string                                    `json:"displayName,omitempty"`
	DoubleValue    *float64                                   `json:"doubleValue,omitempty"`
	EnumValue      *GoogleCloudDatacatalogV1TagFieldEnumValue `json:"enumValue,omitempty"`
	Order          *int32                                     `json:"order,omitempty"`
	RichtextValue  *string                                    `json:"richtextValue,omitempty"`
	StringValue    *string                                    `json:"stringValue,omitempty"`
	TimestampValue *string                                    `json:"timestampValue,omitempty"`
}
