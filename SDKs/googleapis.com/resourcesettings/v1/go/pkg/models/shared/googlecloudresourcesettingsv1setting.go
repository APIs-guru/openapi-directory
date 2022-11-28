package shared

// GoogleCloudResourcesettingsV1Setting
// The schema for settings.
type GoogleCloudResourcesettingsV1Setting struct {
	EffectiveValue *GoogleCloudResourcesettingsV1Value           `json:"effectiveValue,omitempty"`
	Etag           *string                                       `json:"etag,omitempty"`
	LocalValue     *GoogleCloudResourcesettingsV1Value           `json:"localValue,omitempty"`
	Metadata       *GoogleCloudResourcesettingsV1SettingMetadata `json:"metadata,omitempty"`
	Name           *string                                       `json:"name,omitempty"`
}
