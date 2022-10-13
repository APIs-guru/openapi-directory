package shared

type GoogleCloudDatacatalogV1beta1TagField struct {
	BoolValue      *bool                                           `json:"boolValue"`
	DisplayName    *string                                         `json:"displayName"`
	DoubleValue    *float64                                        `json:"doubleValue"`
	EnumValue      *GoogleCloudDatacatalogV1beta1TagFieldEnumValue `json:"enumValue"`
	Order          *int32                                          `json:"order"`
	StringValue    *string                                         `json:"stringValue"`
	TimestampValue *string                                         `json:"timestampValue"`
}
