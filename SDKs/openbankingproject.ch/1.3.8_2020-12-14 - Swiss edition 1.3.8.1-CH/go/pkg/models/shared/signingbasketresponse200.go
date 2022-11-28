package shared

// SigningBasketResponse200
// Body of the JSON response for a successful get signing basket request.
//
//   - 'payments': payment initiations which shall be authorised through this signing basket.
//   - 'consents': consent objects which shall be authorised through this signing basket.
//   - 'transactionStatus': Only the codes RCVD, ACTC, RJCT are used.
//   - '_links': The ASPSP might integrate hyperlinks to indicate next (authorisation) steps to be taken.
type SigningBasketResponse200 struct {
	Links             *LinksSigningBasket      `json:"_links,omitempty"`
	Consents          []string                 `json:"consents,omitempty"`
	Payments          []string                 `json:"payments,omitempty"`
	TransactionStatus TransactionStatusSbsEnum `json:"transactionStatus"`
}
