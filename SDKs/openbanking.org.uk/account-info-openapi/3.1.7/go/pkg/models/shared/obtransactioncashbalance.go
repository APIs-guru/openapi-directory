package shared



type ObTransactionCashBalanceAmount struct {
    Amount string `json:"Amount"`
    Currency string `json:"Currency"`
    
}

type ObTransactionCashBalance struct {
    Amount ObTransactionCashBalanceAmount `json:"Amount"`
    CreditDebitIndicator ObCreditDebitCode2Enum `json:"CreditDebitIndicator"`
    Type ObBalanceType1CodeEnum `json:"Type"`
    
}

