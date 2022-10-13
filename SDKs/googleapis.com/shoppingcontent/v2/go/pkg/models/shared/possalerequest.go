package shared

type PosSaleRequest struct {
	ContentLanguage *string `json:"contentLanguage"`
	Gtin            *string `json:"gtin"`
	ItemID          *string `json:"itemId"`
	Price           *Price  `json:"price"`
	Quantity        *string `json:"quantity"`
	SaleID          *string `json:"saleId"`
	StoreCode       *string `json:"storeCode"`
	TargetCountry   *string `json:"targetCountry"`
	Timestamp       *string `json:"timestamp"`
}
