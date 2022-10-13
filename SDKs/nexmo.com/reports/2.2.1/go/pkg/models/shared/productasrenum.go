package shared

type ProductAsrEnum string

const (
	ProductAsrEnumSms           ProductAsrEnum = "SMS"
	ProductAsrEnumVoiceCall     ProductAsrEnum = "VOICE-CALL"
	ProductAsrEnumInAppVoice    ProductAsrEnum = "IN-APP-VOICE"
	ProductAsrEnumWebsocketCall ProductAsrEnum = "WEBSOCKET-CALL"
	ProductAsrEnumVerifyAPI     ProductAsrEnum = "VERIFY-API"
	ProductAsrEnumNumberInsight ProductAsrEnum = "NUMBER-INSIGHT"
	ProductAsrEnumMessages      ProductAsrEnum = "MESSAGES"
	ProductAsrEnumConversations ProductAsrEnum = "CONVERSATIONS"
	ProductAsrEnumAsr           ProductAsrEnum = "ASR"
)
