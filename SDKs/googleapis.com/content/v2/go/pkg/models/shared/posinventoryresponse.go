package shared

type PosInventoryResponse struct {
	ContentLanguage *string `json:"contentLanguage"`
	Gtin            *string `json:"gtin"`
	ItemID          *string `json:"itemId"`
	Kind            *string `json:"kind"`
	Price           *Price  `json:"price"`
	Quantity        *string `json:"quantity"`
	StoreCode       *string `json:"storeCode"`
	TargetCountry   *string `json:"targetCountry"`
	Timestamp       *string `json:"timestamp"`
}
