package shared

type EnterpriseCrmEventbusProtoCustomSuspensionRequest struct {
	PostToQueueWithTriggerIDRequest *GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequest `json:"postToQueueWithTriggerIdRequest,omitempty"`
	SuspensionInfoEventParameterKey *string                                                          `json:"suspensionInfoEventParameterKey,omitempty"`
}
