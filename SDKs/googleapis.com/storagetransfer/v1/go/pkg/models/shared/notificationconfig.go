package shared

type NotificationConfigEventTypesEnum string

const (
	NotificationConfigEventTypesEnumEventTypeUnspecified     NotificationConfigEventTypesEnum = "EVENT_TYPE_UNSPECIFIED"
	NotificationConfigEventTypesEnumTransferOperationSuccess NotificationConfigEventTypesEnum = "TRANSFER_OPERATION_SUCCESS"
	NotificationConfigEventTypesEnumTransferOperationFailed  NotificationConfigEventTypesEnum = "TRANSFER_OPERATION_FAILED"
	NotificationConfigEventTypesEnumTransferOperationAborted NotificationConfigEventTypesEnum = "TRANSFER_OPERATION_ABORTED"
)

type NotificationConfigPayloadFormatEnum string

const (
	NotificationConfigPayloadFormatEnumPayloadFormatUnspecified NotificationConfigPayloadFormatEnum = "PAYLOAD_FORMAT_UNSPECIFIED"
	NotificationConfigPayloadFormatEnumNone                     NotificationConfigPayloadFormatEnum = "NONE"
	NotificationConfigPayloadFormatEnumJSON                     NotificationConfigPayloadFormatEnum = "JSON"
)

// NotificationConfig
// Specification to configure notifications published to Pub/Sub. Notifications are published to the customer-provided topic using the following `PubsubMessage.attributes`: * `"eventType"`: one of the EventType values * `"payloadFormat"`: one of the PayloadFormat values * `"projectId"`: the project_id of the `TransferOperation` * `"transferJobName"`: the transfer_job_name of the `TransferOperation` * `"transferOperationName"`: the name of the `TransferOperation` The `PubsubMessage.data` contains a TransferOperation resource formatted according to the specified `PayloadFormat`.
type NotificationConfig struct {
	EventTypes    []NotificationConfigEventTypesEnum   `json:"eventTypes,omitempty"`
	PayloadFormat *NotificationConfigPayloadFormatEnum `json:"payloadFormat,omitempty"`
	PubsubTopic   *string                              `json:"pubsubTopic,omitempty"`
}
