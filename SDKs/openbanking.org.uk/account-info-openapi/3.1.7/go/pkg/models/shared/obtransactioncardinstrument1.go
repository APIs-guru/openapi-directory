package shared

type ObTransactionCardInstrument1AuthorisationTypeEnum string

const (
	ObTransactionCardInstrument1AuthorisationTypeEnumConsumerDevice ObTransactionCardInstrument1AuthorisationTypeEnum = "ConsumerDevice"
	ObTransactionCardInstrument1AuthorisationTypeEnumContactless    ObTransactionCardInstrument1AuthorisationTypeEnum = "Contactless"
	ObTransactionCardInstrument1AuthorisationTypeEnumNone           ObTransactionCardInstrument1AuthorisationTypeEnum = "None"
	ObTransactionCardInstrument1AuthorisationTypeEnumPin            ObTransactionCardInstrument1AuthorisationTypeEnum = "PIN"
)

type ObTransactionCardInstrument1CardSchemeNameEnum string

const (
	ObTransactionCardInstrument1CardSchemeNameEnumAmericanExpress ObTransactionCardInstrument1CardSchemeNameEnum = "AmericanExpress"
	ObTransactionCardInstrument1CardSchemeNameEnumDiners          ObTransactionCardInstrument1CardSchemeNameEnum = "Diners"
	ObTransactionCardInstrument1CardSchemeNameEnumDiscover        ObTransactionCardInstrument1CardSchemeNameEnum = "Discover"
	ObTransactionCardInstrument1CardSchemeNameEnumMasterCard      ObTransactionCardInstrument1CardSchemeNameEnum = "MasterCard"
	ObTransactionCardInstrument1CardSchemeNameEnumVisa            ObTransactionCardInstrument1CardSchemeNameEnum = "VISA"
)

type ObTransactionCardInstrument1 struct {
	AuthorisationType *ObTransactionCardInstrument1AuthorisationTypeEnum `json:"AuthorisationType"`
	CardSchemeName    ObTransactionCardInstrument1CardSchemeNameEnum     `json:"CardSchemeName"`
	Identification    *string                                            `json:"Identification"`
	Name              *string                                            `json:"Name"`
}
