package shared

type ProductSmsEnum string

const (
	ProductSmsEnumSms           ProductSmsEnum = "SMS"
	ProductSmsEnumVoiceCall     ProductSmsEnum = "VOICE-CALL"
	ProductSmsEnumInAppVoice    ProductSmsEnum = "IN-APP-VOICE"
	ProductSmsEnumWebsocketCall ProductSmsEnum = "WEBSOCKET-CALL"
	ProductSmsEnumVerifyAPI     ProductSmsEnum = "VERIFY-API"
	ProductSmsEnumNumberInsight ProductSmsEnum = "NUMBER-INSIGHT"
	ProductSmsEnumMessages      ProductSmsEnum = "MESSAGES"
	ProductSmsEnumConversations ProductSmsEnum = "CONVERSATIONS"
	ProductSmsEnumAsr           ProductSmsEnum = "ASR"
)
