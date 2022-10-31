package shared



type SigningBasketResponse200 struct {
    Links *LinksSigningBasket `json:"_links,omitempty"`
    Consents []string `json:"consents,omitempty"`
    Payments []string `json:"payments,omitempty"`
    TransactionStatus TransactionStatusSbsEnum `json:"transactionStatus"`
    
}

