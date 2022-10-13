package shared

type GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnum string

const (
	GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnumEntityOverrideModeUnspecified GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnum = "ENTITY_OVERRIDE_MODE_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnumEntityOverrideModeOverride    GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnum = "ENTITY_OVERRIDE_MODE_OVERRIDE"
	GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnumEntityOverrideModeSupplement  GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnum = "ENTITY_OVERRIDE_MODE_SUPPLEMENT"
)

type GoogleCloudDialogflowV2beta1SessionEntityType struct {
	Entities           []GoogleCloudDialogflowV2beta1EntityTypeEntity                       `json:"entities"`
	EntityOverrideMode *GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnum `json:"entityOverrideMode"`
	Name               *string                                                              `json:"name"`
}
