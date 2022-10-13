package shared

type ProductVoiceEnum string

const (
	ProductVoiceEnumSms           ProductVoiceEnum = "SMS"
	ProductVoiceEnumVoiceCall     ProductVoiceEnum = "VOICE-CALL"
	ProductVoiceEnumInAppVoice    ProductVoiceEnum = "IN-APP-VOICE"
	ProductVoiceEnumWebsocketCall ProductVoiceEnum = "WEBSOCKET-CALL"
	ProductVoiceEnumVerifyAPI     ProductVoiceEnum = "VERIFY-API"
	ProductVoiceEnumNumberInsight ProductVoiceEnum = "NUMBER-INSIGHT"
	ProductVoiceEnumMessages      ProductVoiceEnum = "MESSAGES"
	ProductVoiceEnumConversations ProductVoiceEnum = "CONVERSATIONS"
	ProductVoiceEnumAsr           ProductVoiceEnum = "ASR"
)
