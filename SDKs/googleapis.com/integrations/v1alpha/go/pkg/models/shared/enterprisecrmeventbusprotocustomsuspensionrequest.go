package shared

type EnterpriseCrmEventbusProtoCustomSuspensionRequest struct {
	PostToQueueWithTriggerIDRequest *GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequest `json:"postToQueueWithTriggerIdRequest"`
	SuspensionInfoEventParameterKey *string                                                          `json:"suspensionInfoEventParameterKey"`
}
