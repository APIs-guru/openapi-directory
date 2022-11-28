package shared

// GoogleCloudDatacatalogV1beta1TagFieldInput
// Contains the value and supporting information for a field within a Tag.
type GoogleCloudDatacatalogV1beta1TagFieldInput struct {
	BoolValue      *bool                                           `json:"boolValue,omitempty"`
	DoubleValue    *float64                                        `json:"doubleValue,omitempty"`
	EnumValue      *GoogleCloudDatacatalogV1beta1TagFieldEnumValue `json:"enumValue,omitempty"`
	StringValue    *string                                         `json:"stringValue,omitempty"`
	TimestampValue *string                                         `json:"timestampValue,omitempty"`
}

// GoogleCloudDatacatalogV1beta1TagField
// Contains the value and supporting information for a field within a Tag.
type GoogleCloudDatacatalogV1beta1TagField struct {
	BoolValue      *bool                                           `json:"boolValue,omitempty"`
	DisplayName    *string                                         `json:"displayName,omitempty"`
	DoubleValue    *float64                                        `json:"doubleValue,omitempty"`
	EnumValue      *GoogleCloudDatacatalogV1beta1TagFieldEnumValue `json:"enumValue,omitempty"`
	Order          *int32                                          `json:"order,omitempty"`
	StringValue    *string                                         `json:"stringValue,omitempty"`
	TimestampValue *string                                         `json:"timestampValue,omitempty"`
}
