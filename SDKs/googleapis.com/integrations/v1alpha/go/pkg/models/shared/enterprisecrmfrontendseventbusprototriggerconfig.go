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
	AlertConfig              []EnterpriseCrmEventbusProtoWorkflowAlertConfig                               `json:"alertConfig"`
	Description              *string                                                                       `json:"description"`
	EnabledClients           []string                                                                      `json:"enabledClients"`
	Label                    *string                                                                       `json:"label"`
	NextTasksExecutionPolicy *EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnum `json:"nextTasksExecutionPolicy"`
	PauseWorkflowExecutions  *bool                                                                         `json:"pauseWorkflowExecutions"`
	Position                 *EnterpriseCrmEventbusProtoCoordinate                                         `json:"position"`
	Properties               map[string]string                                                             `json:"properties"`
	StartTasks               []EnterpriseCrmEventbusProtoNextTask                                          `json:"startTasks"`
	TriggerCriteria          *EnterpriseCrmEventbusProtoTriggerCriteria                                    `json:"triggerCriteria"`
	TriggerID                *string                                                                       `json:"triggerId"`
	TriggerNumber            *string                                                                       `json:"triggerNumber"`
	TriggerType              *EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum              `json:"triggerType"`
}
