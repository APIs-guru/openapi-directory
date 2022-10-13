package shared

type GoogleCloudResourcesettingsV1Value struct {
	BooleanValue   *bool                                        `json:"booleanValue"`
	DurationValue  *string                                      `json:"durationValue"`
	EnumValue      *GoogleCloudResourcesettingsV1ValueEnumValue `json:"enumValue"`
	StringMapValue *GoogleCloudResourcesettingsV1ValueStringMap `json:"stringMapValue"`
	StringSetValue *GoogleCloudResourcesettingsV1ValueStringSet `json:"stringSetValue"`
	StringValue    *string                                      `json:"stringValue"`
}
