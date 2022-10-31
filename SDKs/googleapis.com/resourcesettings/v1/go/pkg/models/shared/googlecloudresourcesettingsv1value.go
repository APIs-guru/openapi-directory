package shared



type GoogleCloudResourcesettingsV1Value struct {
    BooleanValue *bool `json:"booleanValue,omitempty"`
    DurationValue *string `json:"durationValue,omitempty"`
    EnumValue *GoogleCloudResourcesettingsV1ValueEnumValue `json:"enumValue,omitempty"`
    StringMapValue *GoogleCloudResourcesettingsV1ValueStringMap `json:"stringMapValue,omitempty"`
    StringSetValue *GoogleCloudResourcesettingsV1ValueStringSet `json:"stringSetValue,omitempty"`
    StringValue *string `json:"stringValue,omitempty"`
    
}

