package shared

type ProductConversationsEnum string

const (
	ProductConversationsEnumSms           ProductConversationsEnum = "SMS"
	ProductConversationsEnumVoiceCall     ProductConversationsEnum = "VOICE-CALL"
	ProductConversationsEnumInAppVoice    ProductConversationsEnum = "IN-APP-VOICE"
	ProductConversationsEnumWebsocketCall ProductConversationsEnum = "WEBSOCKET-CALL"
	ProductConversationsEnumVerifyAPI     ProductConversationsEnum = "VERIFY-API"
	ProductConversationsEnumNumberInsight ProductConversationsEnum = "NUMBER-INSIGHT"
	ProductConversationsEnumMessages      ProductConversationsEnum = "MESSAGES"
	ProductConversationsEnumConversations ProductConversationsEnum = "CONVERSATIONS"
	ProductConversationsEnumAsr           ProductConversationsEnum = "ASR"
)
