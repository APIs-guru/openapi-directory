package shared

type GoogleCloudResourcesettingsV1Setting struct {
	EffectiveValue *GoogleCloudResourcesettingsV1Value           `json:"effectiveValue"`
	Etag           *string                                       `json:"etag"`
	LocalValue     *GoogleCloudResourcesettingsV1Value           `json:"localValue"`
	Metadata       *GoogleCloudResourcesettingsV1SettingMetadata `json:"metadata"`
	Name           *string                                       `json:"name"`
}
