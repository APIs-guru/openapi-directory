package shared

type GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequestPriorityEnum string

const (
	GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequestPriorityEnumUnspcified    GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequestPriorityEnum = "UNSPCIFIED"
	GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequestPriorityEnumSheddable     GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequestPriorityEnum = "SHEDDABLE"
	GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequestPriorityEnumSheddablePlus GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequestPriorityEnum = "SHEDDABLE_PLUS"
	GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequestPriorityEnumCritical      GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequestPriorityEnum = "CRITICAL"
	GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequestPriorityEnumCriticalPlus  GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequestPriorityEnum = "CRITICAL_PLUS"
)

type GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequest struct {
	ClientID                      *string                                                                      `json:"clientId"`
	IgnoreErrorIfNoActiveWorkflow *bool                                                                        `json:"ignoreErrorIfNoActiveWorkflow"`
	Parameters                    *EnterpriseCrmEventbusProtoEventParameters                                   `json:"parameters"`
	Priority                      *GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequestPriorityEnum `json:"priority"`
	RequestID                     *string                                                                      `json:"requestId"`
	ScheduledTime                 *string                                                                      `json:"scheduledTime"`
	TestMode                      *bool                                                                        `json:"testMode"`
	TriggerID                     *string                                                                      `json:"triggerId"`
	WorkflowName                  *string                                                                      `json:"workflowName"`
}
