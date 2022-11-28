package shared

type GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnum string

const (
	GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnumEntityOverrideModeUnspecified GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnum = "ENTITY_OVERRIDE_MODE_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnumEntityOverrideModeOverride    GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnum = "ENTITY_OVERRIDE_MODE_OVERRIDE"
	GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnumEntityOverrideModeSupplement  GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnum = "ENTITY_OVERRIDE_MODE_SUPPLEMENT"
)

// GoogleCloudDialogflowV2beta1SessionEntityType
// A session represents a conversation between a Dialogflow agent and an end-user. You can create special entities, called session entities, during a session. Session entities can extend or replace custom entity types and only exist during the session that they were created for. All session data, including session entities, is stored by Dialogflow for 20 minutes. For more information, see the [session entity guide](https://cloud.google.com/dialogflow/docs/entities-session).
type GoogleCloudDialogflowV2beta1SessionEntityType struct {
	Entities           []GoogleCloudDialogflowV2beta1EntityTypeEntity                       `json:"entities,omitempty"`
	EntityOverrideMode *GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnum `json:"entityOverrideMode,omitempty"`
	Name               *string                                                              `json:"name,omitempty"`
}
