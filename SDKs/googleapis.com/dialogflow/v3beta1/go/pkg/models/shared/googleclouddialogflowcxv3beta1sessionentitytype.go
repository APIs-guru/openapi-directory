package shared

type GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnum string

const (
	GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnumEntityOverrideModeUnspecified GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnum = "ENTITY_OVERRIDE_MODE_UNSPECIFIED"
	GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnumEntityOverrideModeOverride    GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnum = "ENTITY_OVERRIDE_MODE_OVERRIDE"
	GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnumEntityOverrideModeSupplement  GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnum = "ENTITY_OVERRIDE_MODE_SUPPLEMENT"
)

type GoogleCloudDialogflowCxV3beta1SessionEntityType struct {
	Entities           []GoogleCloudDialogflowCxV3beta1EntityTypeEntity                       `json:"entities"`
	EntityOverrideMode *GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnum `json:"entityOverrideMode"`
	Name               *string                                                                `json:"name"`
}
