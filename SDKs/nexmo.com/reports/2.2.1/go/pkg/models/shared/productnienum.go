package shared

type ProductNiEnum string

const (
	ProductNiEnumSms           ProductNiEnum = "SMS"
	ProductNiEnumVoiceCall     ProductNiEnum = "VOICE-CALL"
	ProductNiEnumInAppVoice    ProductNiEnum = "IN-APP-VOICE"
	ProductNiEnumWebsocketCall ProductNiEnum = "WEBSOCKET-CALL"
	ProductNiEnumVerifyAPI     ProductNiEnum = "VERIFY-API"
	ProductNiEnumNumberInsight ProductNiEnum = "NUMBER-INSIGHT"
	ProductNiEnumMessages      ProductNiEnum = "MESSAGES"
	ProductNiEnumConversations ProductNiEnum = "CONVERSATIONS"
	ProductNiEnumAsr           ProductNiEnum = "ASR"
)
