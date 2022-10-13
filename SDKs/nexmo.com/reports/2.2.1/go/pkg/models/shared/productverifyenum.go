package shared

type ProductVerifyEnum string

const (
	ProductVerifyEnumSms           ProductVerifyEnum = "SMS"
	ProductVerifyEnumVoiceCall     ProductVerifyEnum = "VOICE-CALL"
	ProductVerifyEnumInAppVoice    ProductVerifyEnum = "IN-APP-VOICE"
	ProductVerifyEnumWebsocketCall ProductVerifyEnum = "WEBSOCKET-CALL"
	ProductVerifyEnumVerifyAPI     ProductVerifyEnum = "VERIFY-API"
	ProductVerifyEnumNumberInsight ProductVerifyEnum = "NUMBER-INSIGHT"
	ProductVerifyEnumMessages      ProductVerifyEnum = "MESSAGES"
	ProductVerifyEnumConversations ProductVerifyEnum = "CONVERSATIONS"
	ProductVerifyEnumAsr           ProductVerifyEnum = "ASR"
)
