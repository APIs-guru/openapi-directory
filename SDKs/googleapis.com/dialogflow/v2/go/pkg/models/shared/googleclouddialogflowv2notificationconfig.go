package shared

type GoogleCloudDialogflowV2NotificationConfigMessageFormatEnum string

const (
	GoogleCloudDialogflowV2NotificationConfigMessageFormatEnumMessageFormatUnspecified GoogleCloudDialogflowV2NotificationConfigMessageFormatEnum = "MESSAGE_FORMAT_UNSPECIFIED"
	GoogleCloudDialogflowV2NotificationConfigMessageFormatEnumProto                    GoogleCloudDialogflowV2NotificationConfigMessageFormatEnum = "PROTO"
	GoogleCloudDialogflowV2NotificationConfigMessageFormatEnumJSON                     GoogleCloudDialogflowV2NotificationConfigMessageFormatEnum = "JSON"
)

type GoogleCloudDialogflowV2NotificationConfig struct {
	MessageFormat *GoogleCloudDialogflowV2NotificationConfigMessageFormatEnum `json:"messageFormat,omitempty"`
	Topic         *string                                                     `json:"topic,omitempty"`
}
