package shared

type GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnum string

const (
	GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnumEntityOverrideModeUnspecified GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnum = "ENTITY_OVERRIDE_MODE_UNSPECIFIED"
	GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnumEntityOverrideModeOverride    GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnum = "ENTITY_OVERRIDE_MODE_OVERRIDE"
	GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnumEntityOverrideModeSupplement  GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnum = "ENTITY_OVERRIDE_MODE_SUPPLEMENT"
)

// GoogleCloudDialogflowCxV3beta1SessionEntityType
// Session entity types are referred to as **User** entity types and are entities that are built for an individual user such as favorites, preferences, playlists, and so on. You can redefine a session entity type at the session level to extend or replace a custom entity type at the user session level (we refer to the entity types defined at the agent level as "custom entity types"). Note: session entity types apply to all queries, regardless of the language. For more information about entity types, see the [Dialogflow documentation](https://cloud.google.com/dialogflow/docs/entities-overview).
type GoogleCloudDialogflowCxV3beta1SessionEntityType struct {
	Entities           []GoogleCloudDialogflowCxV3beta1EntityTypeEntity                       `json:"entities,omitempty"`
	EntityOverrideMode *GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnum `json:"entityOverrideMode,omitempty"`
	Name               *string                                                                `json:"name,omitempty"`
}
