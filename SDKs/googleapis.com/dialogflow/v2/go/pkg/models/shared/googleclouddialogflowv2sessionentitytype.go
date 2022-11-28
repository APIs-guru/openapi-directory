package shared

type GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnum string

const (
	GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnumEntityOverrideModeUnspecified GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnum = "ENTITY_OVERRIDE_MODE_UNSPECIFIED"
	GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnumEntityOverrideModeOverride    GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnum = "ENTITY_OVERRIDE_MODE_OVERRIDE"
	GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnumEntityOverrideModeSupplement  GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnum = "ENTITY_OVERRIDE_MODE_SUPPLEMENT"
)

// GoogleCloudDialogflowV2SessionEntityType
// A session represents a conversation between a Dialogflow agent and an end-user. You can create special entities, called session entities, during a session. Session entities can extend or replace custom entity types and only exist during the session that they were created for. All session data, including session entities, is stored by Dialogflow for 20 minutes. For more information, see the [session entity guide](https://cloud.google.com/dialogflow/docs/entities-session).
type GoogleCloudDialogflowV2SessionEntityType struct {
	Entities           []GoogleCloudDialogflowV2EntityTypeEntity                       `json:"entities,omitempty"`
	EntityOverrideMode *GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnum `json:"entityOverrideMode,omitempty"`
	Name               *string                                                         `json:"name,omitempty"`
}
