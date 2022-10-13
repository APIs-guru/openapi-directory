package shared

type MessageEventTypeEnum string

const (
	MessageEventTypeEnumTypeUnspecified MessageEventTypeEnum = "TYPE_UNSPECIFIED"
	MessageEventTypeEnumSent            MessageEventTypeEnum = "SENT"
	MessageEventTypeEnumReceived        MessageEventTypeEnum = "RECEIVED"
)

type MessageEvent struct {
	CompressedSizeBytes   *string               `json:"compressedSizeBytes"`
	ID                    *string               `json:"id"`
	Type                  *MessageEventTypeEnum `json:"type"`
	UncompressedSizeBytes *string               `json:"uncompressedSizeBytes"`
}
