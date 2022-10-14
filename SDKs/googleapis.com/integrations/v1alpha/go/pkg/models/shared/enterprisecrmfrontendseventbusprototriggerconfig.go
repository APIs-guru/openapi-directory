package shared

type EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnum string

const (
	EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnumUnspecified   EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnum = "UNSPECIFIED"
	EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnumRunAllMatch   EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnum = "RUN_ALL_MATCH"
	EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnumRunFirstMatch EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnum = "RUN_FIRST_MATCH"
)

type EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum string

const (
	EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnumUnknown                   EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum = "UNKNOWN"
	EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnumCloudPubsub               EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum = "CLOUD_PUBSUB"
	EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnumGoops                     EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum = "GOOPS"
	EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnumSfdcSync                  EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum = "SFDC_SYNC"
	EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnumCron                      EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum = "CRON"
	EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnumAPI                       EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum = "API"
	EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnumManifoldTrigger           EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum = "MANIFOLD_TRIGGER"
	EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnumDatalayerDataChange       EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum = "DATALAYER_DATA_CHANGE"
	EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnumSfdcChannel               EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum = "SFDC_CHANNEL"
	EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnumCloudPubsubExternal       EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum = "CLOUD_PUBSUB_EXTERNAL"
	EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnumSfdcCdcChannel            EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum = "SFDC_CDC_CHANNEL"
	EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnumSfdcPlatformEventsChannel EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum = "SFDC_PLATFORM_EVENTS_CHANNEL"
)

type EnterpriseCrmFrontendsEventbusProtoTriggerConfig struct {
	AlertConfig              []EnterpriseCrmEventbusProtoWorkflowAlertConfig                               `json:"alertConfig,omitempty"`
	Description              *string                                                                       `json:"description,omitempty"`
	EnabledClients           []string                                                                      `json:"enabledClients,omitempty"`
	Label                    *string                                                                       `json:"label,omitempty"`
	NextTasksExecutionPolicy *EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnum `json:"nextTasksExecutionPolicy,omitempty"`
	PauseWorkflowExecutions  *bool                                                                         `json:"pauseWorkflowExecutions,omitempty"`
	Position                 *EnterpriseCrmEventbusProtoCoordinate                                         `json:"position,omitempty"`
	Properties               map[string]string                                                             `json:"properties,omitempty"`
	StartTasks               []EnterpriseCrmEventbusProtoNextTask                                          `json:"startTasks,omitempty"`
	TriggerCriteria          *EnterpriseCrmEventbusProtoTriggerCriteria                                    `json:"triggerCriteria,omitempty"`
	TriggerID                *string                                                                       `json:"triggerId,omitempty"`
	TriggerNumber            *string                                                                       `json:"triggerNumber,omitempty"`
	TriggerType              *EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum              `json:"triggerType,omitempty"`
}
