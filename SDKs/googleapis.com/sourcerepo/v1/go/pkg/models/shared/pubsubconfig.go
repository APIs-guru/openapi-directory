package shared

type PubsubConfigMessageFormatEnum string

const (
	PubsubConfigMessageFormatEnumMessageFormatUnspecified PubsubConfigMessageFormatEnum = "MESSAGE_FORMAT_UNSPECIFIED"
	PubsubConfigMessageFormatEnumProtobuf                 PubsubConfigMessageFormatEnum = "PROTOBUF"
	PubsubConfigMessageFormatEnumJSON                     PubsubConfigMessageFormatEnum = "JSON"
)

// PubsubConfig
// Configuration to publish a Cloud Pub/Sub message.
type PubsubConfig struct {
	MessageFormat       *PubsubConfigMessageFormatEnum `json:"messageFormat,omitempty"`
	ServiceAccountEmail *string                        `json:"serviceAccountEmail,omitempty"`
	Topic               *string                        `json:"topic,omitempty"`
}
