package shared

type ProductMessagesEnum string

const (
	ProductMessagesEnumSms           ProductMessagesEnum = "SMS"
	ProductMessagesEnumVoiceCall     ProductMessagesEnum = "VOICE-CALL"
	ProductMessagesEnumInAppVoice    ProductMessagesEnum = "IN-APP-VOICE"
	ProductMessagesEnumVerifyAPI     ProductMessagesEnum = "VERIFY-API"
	ProductMessagesEnumNumberInsight ProductMessagesEnum = "NUMBER-INSIGHT"
	ProductMessagesEnumMessages      ProductMessagesEnum = "MESSAGES"
	ProductMessagesEnumConversations ProductMessagesEnum = "CONVERSATIONS"
	ProductMessagesEnumAsr           ProductMessagesEnum = "ASR"
)
