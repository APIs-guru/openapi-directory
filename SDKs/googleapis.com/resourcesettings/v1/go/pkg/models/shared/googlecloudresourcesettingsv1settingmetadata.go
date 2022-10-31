package shared

type GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnum string

const (
	GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnumDataTypeUnspecified GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnum = "DATA_TYPE_UNSPECIFIED"
	GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnumBoolean             GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnum = "BOOLEAN"
	GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnumString              GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnum = "STRING"
	GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnumStringSet           GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnum = "STRING_SET"
	GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnumEnumValue           GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnum = "ENUM_VALUE"
	GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnumDurationValue       GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnum = "DURATION_VALUE"
	GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnumStringMap           GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnum = "STRING_MAP"
)

type GoogleCloudResourcesettingsV1SettingMetadata struct {
	DataType     *GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnum `json:"dataType,omitempty"`
	DefaultValue *GoogleCloudResourcesettingsV1Value                       `json:"defaultValue,omitempty"`
	Description  *string                                                   `json:"description,omitempty"`
	DisplayName  *string                                                   `json:"displayName,omitempty"`
	ReadOnly     *bool                                                     `json:"readOnly,omitempty"`
}
