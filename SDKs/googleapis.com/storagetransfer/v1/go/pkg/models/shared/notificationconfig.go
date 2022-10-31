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

type NotificationConfig struct {
	EventTypes    []NotificationConfigEventTypesEnum   `json:"eventTypes,omitempty"`
	PayloadFormat *NotificationConfigPayloadFormatEnum `json:"payloadFormat,omitempty"`
	PubsubTopic   *string                              `json:"pubsubTopic,omitempty"`
}
