package shared

type ProductInAppVoiceEnum string

const (
	ProductInAppVoiceEnumSms           ProductInAppVoiceEnum = "SMS"
	ProductInAppVoiceEnumVoiceCall     ProductInAppVoiceEnum = "VOICE-CALL"
	ProductInAppVoiceEnumInAppVoice    ProductInAppVoiceEnum = "IN-APP-VOICE"
	ProductInAppVoiceEnumWebsocketCall ProductInAppVoiceEnum = "WEBSOCKET-CALL"
	ProductInAppVoiceEnumVerifyAPI     ProductInAppVoiceEnum = "VERIFY-API"
	ProductInAppVoiceEnumNumberInsight ProductInAppVoiceEnum = "NUMBER-INSIGHT"
	ProductInAppVoiceEnumMessages      ProductInAppVoiceEnum = "MESSAGES"
	ProductInAppVoiceEnumConversations ProductInAppVoiceEnum = "CONVERSATIONS"
	ProductInAppVoiceEnumAsr           ProductInAppVoiceEnum = "ASR"
)
