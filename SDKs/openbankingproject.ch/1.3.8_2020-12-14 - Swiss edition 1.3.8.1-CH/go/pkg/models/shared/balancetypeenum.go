package shared




type BalanceTypeEnum string

const (
    BalanceTypeEnumClosingBooked BalanceTypeEnum = "closingBooked"
BalanceTypeEnumExpected BalanceTypeEnum = "expected"
BalanceTypeEnumOpeningBooked BalanceTypeEnum = "openingBooked"
BalanceTypeEnumInterimAvailable BalanceTypeEnum = "interimAvailable"
BalanceTypeEnumInterimBooked BalanceTypeEnum = "interimBooked"
BalanceTypeEnumForwardAvailable BalanceTypeEnum = "forwardAvailable"
BalanceTypeEnumNonInvoiced BalanceTypeEnum = "nonInvoiced"
)


