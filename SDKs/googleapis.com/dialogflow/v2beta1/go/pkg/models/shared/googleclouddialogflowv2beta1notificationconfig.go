package shared

type GoogleCloudDialogflowV2beta1NotificationConfigMessageFormatEnum string

const (
	GoogleCloudDialogflowV2beta1NotificationConfigMessageFormatEnumMessageFormatUnspecified GoogleCloudDialogflowV2beta1NotificationConfigMessageFormatEnum = "MESSAGE_FORMAT_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1NotificationConfigMessageFormatEnumProto                    GoogleCloudDialogflowV2beta1NotificationConfigMessageFormatEnum = "PROTO"
	GoogleCloudDialogflowV2beta1NotificationConfigMessageFormatEnumJSON                     GoogleCloudDialogflowV2beta1NotificationConfigMessageFormatEnum = "JSON"
)

// GoogleCloudDialogflowV2beta1NotificationConfig
// Defines notification behavior.
type GoogleCloudDialogflowV2beta1NotificationConfig struct {
	MessageFormat *GoogleCloudDialogflowV2beta1NotificationConfigMessageFormatEnum `json:"messageFormat,omitempty"`
	Topic         *string                                                          `json:"topic,omitempty"`
}
