package shared

type GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum string

const (
	GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnumResourceTypeUnspecified GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum = "RESOURCE_TYPE_UNSPECIFIED"
	GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnumAgent                   GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum = "AGENT"
	GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnumIntent                  GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum = "INTENT"
	GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnumIntentTrainingPhrase    GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum = "INTENT_TRAINING_PHRASE"
	GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnumIntentParameter         GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum = "INTENT_PARAMETER"
	GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnumIntents                 GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum = "INTENTS"
	GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnumIntentTrainingPhrases   GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum = "INTENT_TRAINING_PHRASES"
	GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnumEntityType              GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum = "ENTITY_TYPE"
	GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnumEntityTypes             GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum = "ENTITY_TYPES"
	GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnumWebhook                 GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum = "WEBHOOK"
	GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnumFlow                    GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum = "FLOW"
	GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnumPage                    GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum = "PAGE"
	GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnumPages                   GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum = "PAGES"
	GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnumTransitionRouteGroup    GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum = "TRANSITION_ROUTE_GROUP"
)

type GoogleCloudDialogflowCxV3ValidationMessageSeverityEnum string

const (
	GoogleCloudDialogflowCxV3ValidationMessageSeverityEnumSeverityUnspecified GoogleCloudDialogflowCxV3ValidationMessageSeverityEnum = "SEVERITY_UNSPECIFIED"
	GoogleCloudDialogflowCxV3ValidationMessageSeverityEnumInfo                GoogleCloudDialogflowCxV3ValidationMessageSeverityEnum = "INFO"
	GoogleCloudDialogflowCxV3ValidationMessageSeverityEnumWarning             GoogleCloudDialogflowCxV3ValidationMessageSeverityEnum = "WARNING"
	GoogleCloudDialogflowCxV3ValidationMessageSeverityEnumError               GoogleCloudDialogflowCxV3ValidationMessageSeverityEnum = "ERROR"
)

type GoogleCloudDialogflowCxV3ValidationMessage struct {
	Detail        *string                                                     `json:"detail,omitempty"`
	ResourceNames []GoogleCloudDialogflowCxV3ResourceName                     `json:"resourceNames,omitempty"`
	ResourceType  *GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum `json:"resourceType,omitempty"`
	Resources     []string                                                    `json:"resources,omitempty"`
	Severity      *GoogleCloudDialogflowCxV3ValidationMessageSeverityEnum     `json:"severity,omitempty"`
}
