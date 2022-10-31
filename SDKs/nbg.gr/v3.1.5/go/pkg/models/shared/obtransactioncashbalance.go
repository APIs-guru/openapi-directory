package shared

type ObTransactionCashBalance struct {
	Amount               ObActiveOrHistoricCurrencyAndAmount `json:"Amount"`
	CreditDebitIndicator ObCreditDebitCodeEnum               `json:"CreditDebitIndicator"`
	Type                 ObBalanceType1CodeEnum              `json:"Type"`
}
