package shared

// BillingRatesListResponse
// Billing Rate List Response
type BillingRatesListResponse struct {
	BillingRates  []BillingRate `json:"billingRates,omitempty"`
	Kind          *string       `json:"kind,omitempty"`
	NextPageToken *string       `json:"nextPageToken,omitempty"`
}
