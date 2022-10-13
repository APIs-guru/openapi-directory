package shared

type RedactTransactionProductEnum string

const (
	RedactTransactionProductEnumSms           RedactTransactionProductEnum = "sms"
	RedactTransactionProductEnumVoice         RedactTransactionProductEnum = "voice"
	RedactTransactionProductEnumNumberInsight RedactTransactionProductEnum = "number-insight"
	RedactTransactionProductEnumVerify        RedactTransactionProductEnum = "verify"
	RedactTransactionProductEnumVerifySdk     RedactTransactionProductEnum = "verify-sdk"
	RedactTransactionProductEnumMessages      RedactTransactionProductEnum = "messages"
)

type RedactTransactionTypeEnum string

const (
	RedactTransactionTypeEnumInbound  RedactTransactionTypeEnum = "inbound"
	RedactTransactionTypeEnumOutbound RedactTransactionTypeEnum = "outbound"
)

type RedactTransaction struct {
	ID      string                       `json:"id"`
	Product RedactTransactionProductEnum `json:"product"`
	Type    RedactTransactionTypeEnum    `json:"type"`
}
