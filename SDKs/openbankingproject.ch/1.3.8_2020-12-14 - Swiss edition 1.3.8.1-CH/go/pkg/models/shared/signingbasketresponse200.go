package shared

type SigningBasketResponse200 struct {
	Links             *LinksSigningBasket      `json:"_links"`
	Consents          []string                 `json:"consents"`
	Payments          []string                 `json:"payments"`
	TransactionStatus TransactionStatusSbsEnum `json:"transactionStatus"`
}
