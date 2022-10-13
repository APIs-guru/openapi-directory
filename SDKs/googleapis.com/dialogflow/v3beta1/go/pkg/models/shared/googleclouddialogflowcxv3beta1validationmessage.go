package shared

type GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum string

const (
	GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnumResourceTypeUnspecified GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum = "RESOURCE_TYPE_UNSPECIFIED"
	GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnumAgent                   GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum = "AGENT"
	GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnumIntent                  GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum = "INTENT"
	GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnumIntentTrainingPhrase    GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum = "INTENT_TRAINING_PHRASE"
	GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnumIntentParameter         GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum = "INTENT_PARAMETER"
	GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnumIntents                 GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum = "INTENTS"
	GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnumIntentTrainingPhrases   GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum = "INTENT_TRAINING_PHRASES"
	GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnumEntityType              GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum = "ENTITY_TYPE"
	GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnumEntityTypes             GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum = "ENTITY_TYPES"
	GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnumWebhook                 GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum = "WEBHOOK"
	GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnumFlow                    GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum = "FLOW"
	GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnumPage                    GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum = "PAGE"
	GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnumPages                   GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum = "PAGES"
	GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnumTransitionRouteGroup    GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum = "TRANSITION_ROUTE_GROUP"
)

type GoogleCloudDialogflowCxV3beta1ValidationMessageSeverityEnum string

const (
	GoogleCloudDialogflowCxV3beta1ValidationMessageSeverityEnumSeverityUnspecified GoogleCloudDialogflowCxV3beta1ValidationMessageSeverityEnum = "SEVERITY_UNSPECIFIED"
	GoogleCloudDialogflowCxV3beta1ValidationMessageSeverityEnumInfo                GoogleCloudDialogflowCxV3beta1ValidationMessageSeverityEnum = "INFO"
	GoogleCloudDialogflowCxV3beta1ValidationMessageSeverityEnumWarning             GoogleCloudDialogflowCxV3beta1ValidationMessageSeverityEnum = "WARNING"
	GoogleCloudDialogflowCxV3beta1ValidationMessageSeverityEnumError               GoogleCloudDialogflowCxV3beta1ValidationMessageSeverityEnum = "ERROR"
)

type GoogleCloudDialogflowCxV3beta1ValidationMessage struct {
	Detail        *string                                                          `json:"detail"`
	ResourceNames []GoogleCloudDialogflowCxV3beta1ResourceName                     `json:"resourceNames"`
	ResourceType  *GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum `json:"resourceType"`
	Resources     []string                                                         `json:"resources"`
	Severity      *GoogleCloudDialogflowCxV3beta1ValidationMessageSeverityEnum     `json:"severity"`
}
