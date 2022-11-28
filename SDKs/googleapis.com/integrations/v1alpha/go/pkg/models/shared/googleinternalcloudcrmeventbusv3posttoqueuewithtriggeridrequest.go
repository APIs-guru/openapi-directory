package shared

type GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequestPriorityEnum string

const (
	GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequestPriorityEnumUnspcified    GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequestPriorityEnum = "UNSPCIFIED"
	GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequestPriorityEnumSheddable     GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequestPriorityEnum = "SHEDDABLE"
	GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequestPriorityEnumSheddablePlus GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequestPriorityEnum = "SHEDDABLE_PLUS"
	GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequestPriorityEnumCritical      GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequestPriorityEnum = "CRITICAL"
	GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequestPriorityEnumCriticalPlus  GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequestPriorityEnum = "CRITICAL_PLUS"
)

// GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequest
// Use this request to post all workflows associated with a given trigger id. Next available id: 10
type GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequest struct {
	ClientID                      *string                                                                      `json:"clientId,omitempty"`
	IgnoreErrorIfNoActiveWorkflow *bool                                                                        `json:"ignoreErrorIfNoActiveWorkflow,omitempty"`
	Parameters                    *EnterpriseCrmEventbusProtoEventParameters                                   `json:"parameters,omitempty"`
	Priority                      *GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequestPriorityEnum `json:"priority,omitempty"`
	RequestID                     *string                                                                      `json:"requestId,omitempty"`
	ScheduledTime                 *string                                                                      `json:"scheduledTime,omitempty"`
	TestMode                      *bool                                                                        `json:"testMode,omitempty"`
	TriggerID                     *string                                                                      `json:"triggerId,omitempty"`
	WorkflowName                  *string                                                                      `json:"workflowName,omitempty"`
}
