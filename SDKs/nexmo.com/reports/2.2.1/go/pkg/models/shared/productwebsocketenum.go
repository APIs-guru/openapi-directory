package shared

type ProductWebsocketEnum string

const (
	ProductWebsocketEnumSms           ProductWebsocketEnum = "SMS"
	ProductWebsocketEnumVoiceCall     ProductWebsocketEnum = "VOICE-CALL"
	ProductWebsocketEnumInAppVoice    ProductWebsocketEnum = "IN-APP-VOICE"
	ProductWebsocketEnumWebsocketCall ProductWebsocketEnum = "WEBSOCKET-CALL"
	ProductWebsocketEnumVerifyAPI     ProductWebsocketEnum = "VERIFY-API"
	ProductWebsocketEnumNumberInsight ProductWebsocketEnum = "NUMBER-INSIGHT"
	ProductWebsocketEnumMessages      ProductWebsocketEnum = "MESSAGES"
	ProductWebsocketEnumConversations ProductWebsocketEnum = "CONVERSATIONS"
	ProductWebsocketEnumAsr           ProductWebsocketEnum = "ASR"
)
