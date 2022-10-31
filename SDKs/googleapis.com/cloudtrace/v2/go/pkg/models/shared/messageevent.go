package shared




type MessageEventTypeEnum string

const (
    MessageEventTypeEnumTypeUnspecified MessageEventTypeEnum = "TYPE_UNSPECIFIED"
MessageEventTypeEnumSent MessageEventTypeEnum = "SENT"
MessageEventTypeEnumReceived MessageEventTypeEnum = "RECEIVED"
)


type MessageEvent struct {
    CompressedSizeBytes *string `json:"compressedSizeBytes,omitempty"`
    ID *string `json:"id,omitempty"`
    Type *MessageEventTypeEnum `json:"type,omitempty"`
    UncompressedSizeBytes *string `json:"uncompressedSizeBytes,omitempty"`
    
}

