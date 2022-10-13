package shared

type GoogleCloudIntegrationsV1alphaTriggerConfigNextTasksExecutionPolicyEnum string

const (
	GoogleCloudIntegrationsV1alphaTriggerConfigNextTasksExecutionPolicyEnumNextTasksExecutionPolicyUnspecified GoogleCloudIntegrationsV1alphaTriggerConfigNextTasksExecutionPolicyEnum = "NEXT_TASKS_EXECUTION_POLICY_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaTriggerConfigNextTasksExecutionPolicyEnumRunAllMatch                         GoogleCloudIntegrationsV1alphaTriggerConfigNextTasksExecutionPolicyEnum = "RUN_ALL_MATCH"
	GoogleCloudIntegrationsV1alphaTriggerConfigNextTasksExecutionPolicyEnumRunFirstMatch                       GoogleCloudIntegrationsV1alphaTriggerConfigNextTasksExecutionPolicyEnum = "RUN_FIRST_MATCH"
)

type GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnum string

const (
	GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnumTriggerTypeUnspecified GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnum = "TRIGGER_TYPE_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnumCron                   GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnum = "CRON"
	GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnumAPI                    GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnum = "API"
	GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnumSfdcChannel            GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnum = "SFDC_CHANNEL"
	GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnumCloudPubsubExternal    GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnum = "CLOUD_PUBSUB_EXTERNAL"
	GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnumSfdcCdcChannel         GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnum = "SFDC_CDC_CHANNEL"
)

type GoogleCloudIntegrationsV1alphaTriggerConfig struct {
	AlertConfig              []GoogleCloudIntegrationsV1alphaIntegrationAlertConfig                   `json:"alertConfig"`
	Description              *string                                                                  `json:"description"`
	Label                    *string                                                                  `json:"label"`
	NextTasksExecutionPolicy *GoogleCloudIntegrationsV1alphaTriggerConfigNextTasksExecutionPolicyEnum `json:"nextTasksExecutionPolicy"`
	Properties               map[string]string                                                        `json:"properties"`
	StartTasks               []GoogleCloudIntegrationsV1alphaNextTask                                 `json:"startTasks"`
	TriggerID                *string                                                                  `json:"triggerId"`
	TriggerNumber            *string                                                                  `json:"triggerNumber"`
	TriggerType              *GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnum              `json:"triggerType"`
}
