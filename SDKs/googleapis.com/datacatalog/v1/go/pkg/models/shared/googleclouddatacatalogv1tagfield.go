package shared

type GoogleCloudDatacatalogV1TagField struct {
	BoolValue      *bool                                      `json:"boolValue"`
	DisplayName    *string                                    `json:"displayName"`
	DoubleValue    *float64                                   `json:"doubleValue"`
	EnumValue      *GoogleCloudDatacatalogV1TagFieldEnumValue `json:"enumValue"`
	Order          *int32                                     `json:"order"`
	RichtextValue  *string                                    `json:"richtextValue"`
	StringValue    *string                                    `json:"stringValue"`
	TimestampValue *string                                    `json:"timestampValue"`
}
