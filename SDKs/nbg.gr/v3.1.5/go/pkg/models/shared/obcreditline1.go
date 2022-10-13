package shared

type ObCreditLine1 struct {
	Amount   *ObActiveOrHistoricCurrencyAndAmount `json:"Amount"`
	Included bool                                 `json:"Included"`
	Type     *ObExternalLimitType1CodeEnum        `json:"Type"`
}
