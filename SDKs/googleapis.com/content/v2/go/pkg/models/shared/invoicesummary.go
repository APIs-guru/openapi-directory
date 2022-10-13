package shared

type InvoiceSummary struct {
	AdditionalChargeSummaries []InvoiceSummaryAdditionalChargeSummary `json:"additionalChargeSummaries"`
	CustomerBalance           *Amount                                 `json:"customerBalance"`
	GoogleBalance             *Amount                                 `json:"googleBalance"`
	MerchantBalance           *Amount                                 `json:"merchantBalance"`
	ProductTotal              *Amount                                 `json:"productTotal"`
	PromotionSummaries        []Promotion                             `json:"promotionSummaries"`
}
