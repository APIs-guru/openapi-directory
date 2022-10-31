package shared

type GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnum string

const (
	GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnumEntityOverrideModeUnspecified GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnum = "ENTITY_OVERRIDE_MODE_UNSPECIFIED"
	GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnumEntityOverrideModeOverride    GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnum = "ENTITY_OVERRIDE_MODE_OVERRIDE"
	GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnumEntityOverrideModeSupplement  GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnum = "ENTITY_OVERRIDE_MODE_SUPPLEMENT"
)

type GoogleCloudDialogflowV2SessionEntityType struct {
	Entities           []GoogleCloudDialogflowV2EntityTypeEntity                       `json:"entities,omitempty"`
	EntityOverrideMode *GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnum `json:"entityOverrideMode,omitempty"`
	Name               *string                                                         `json:"name,omitempty"`
}
