package shared

// PosSale
// The change of the available quantity of an item at the given store.
type PosSale struct {
	ContentLanguage *string `json:"contentLanguage,omitempty"`
	Gtin            *string `json:"gtin,omitempty"`
	ItemID          *string `json:"itemId,omitempty"`
	Kind            *string `json:"kind,omitempty"`
	Price           *Price  `json:"price,omitempty"`
	Quantity        *string `json:"quantity,omitempty"`
	SaleID          *string `json:"saleId,omitempty"`
	StoreCode       *string `json:"storeCode,omitempty"`
	TargetCountry   *string `json:"targetCountry,omitempty"`
	Timestamp       *string `json:"timestamp,omitempty"`
}
