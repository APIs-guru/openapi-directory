package shared

type OrderTrackingSignalLineItemDetails struct {
	Brand              *string `json:"brand"`
	Gtin               *string `json:"gtin"`
	LineItemID         *string `json:"lineItemId"`
	Mpn                *string `json:"mpn"`
	ProductDescription *string `json:"productDescription"`
	ProductID          *string `json:"productId"`
	ProductTitle       *string `json:"productTitle"`
	Quantity           *string `json:"quantity"`
	Sku                *string `json:"sku"`
	Upc                *string `json:"upc"`
}
