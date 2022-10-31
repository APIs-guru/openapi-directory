package shared



type ObWriteInternational3DataInitiationCreditor struct {
    Name *string `json:"Name,omitempty"`
    PostalAddress *ObPostalAddress6 `json:"PostalAddress,omitempty"`
    
}

type ObWriteInternational3DataInitiationCreditorAccount struct {
    Identification string `json:"Identification"`
    Name string `json:"Name"`
    SchemeName string `json:"SchemeName"`
    SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
    
}

type ObWriteInternational3DataInitiationCreditorAgent struct {
    Identification *string `json:"Identification,omitempty"`
    Name *string `json:"Name,omitempty"`
    PostalAddress *ObPostalAddress6 `json:"PostalAddress,omitempty"`
    SchemeName *string `json:"SchemeName,omitempty"`
    
}

type ObWriteInternational3DataInitiationDebtorAccount struct {
    Identification string `json:"Identification"`
    Name *string `json:"Name,omitempty"`
    SchemeName string `json:"SchemeName"`
    SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
    
}


type ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum string

const (
    ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnumActual ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum = "Actual"
ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnumAgreed ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum = "Agreed"
ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnumIndicative ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum = "Indicative"
)


type ObWriteInternational3DataInitiationExchangeRateInformation struct {
    ContractIdentification *string `json:"ContractIdentification,omitempty"`
    ExchangeRate *float64 `json:"ExchangeRate,omitempty"`
    RateType ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum `json:"RateType"`
    UnitCurrency string `json:"UnitCurrency"`
    
}

type ObWriteInternational3DataInitiationInstructedAmount struct {
    Amount string `json:"Amount"`
    Currency string `json:"Currency"`
    
}


type ObWriteInternational3DataInitiationInstructionPriorityEnum string

const (
    ObWriteInternational3DataInitiationInstructionPriorityEnumNormal ObWriteInternational3DataInitiationInstructionPriorityEnum = "Normal"
ObWriteInternational3DataInitiationInstructionPriorityEnumUrgent ObWriteInternational3DataInitiationInstructionPriorityEnum = "Urgent"
)


type ObWriteInternational3DataInitiationRemittanceInformation struct {
    Reference *string `json:"Reference,omitempty"`
    Unstructured *string `json:"Unstructured,omitempty"`
    
}

type ObWriteInternational3DataInitiation struct {
    ChargeBearer *ObChargeBearerType1CodeEnum `json:"ChargeBearer,omitempty"`
    Creditor *ObWriteInternational3DataInitiationCreditor `json:"Creditor,omitempty"`
    CreditorAccount ObWriteInternational3DataInitiationCreditorAccount `json:"CreditorAccount"`
    CreditorAgent *ObWriteInternational3DataInitiationCreditorAgent `json:"CreditorAgent,omitempty"`
    CurrencyOfTransfer string `json:"CurrencyOfTransfer"`
    DebtorAccount *ObWriteInternational3DataInitiationDebtorAccount `json:"DebtorAccount,omitempty"`
    DestinationCountryCode *string `json:"DestinationCountryCode,omitempty"`
    EndToEndIdentification string `json:"EndToEndIdentification"`
    ExchangeRateInformation *ObWriteInternational3DataInitiationExchangeRateInformation `json:"ExchangeRateInformation,omitempty"`
    ExtendedPurpose *string `json:"ExtendedPurpose,omitempty"`
    InstructedAmount ObWriteInternational3DataInitiationInstructedAmount `json:"InstructedAmount"`
    InstructionIdentification string `json:"InstructionIdentification"`
    InstructionPriority *ObWriteInternational3DataInitiationInstructionPriorityEnum `json:"InstructionPriority,omitempty"`
    LocalInstrument *string `json:"LocalInstrument,omitempty"`
    Purpose *string `json:"Purpose,omitempty"`
    RemittanceInformation *ObWriteInternational3DataInitiationRemittanceInformation `json:"RemittanceInformation,omitempty"`
    SupplementaryData map[string]interface{} `json:"SupplementaryData,omitempty"`
    
}

type ObWriteInternational3Data struct {
    ConsentID string `json:"ConsentId"`
    Initiation ObWriteInternational3DataInitiation `json:"Initiation"`
    
}

type ObWriteInternational3 struct {
    Data ObWriteInternational3Data `json:"Data"`
    Risk ObRisk1 `json:"Risk"`
    
}

