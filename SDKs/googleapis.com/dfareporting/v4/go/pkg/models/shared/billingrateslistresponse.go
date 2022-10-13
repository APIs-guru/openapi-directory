package shared

type BillingRatesListResponse struct {
	BillingRates  []BillingRate `json:"billingRates"`
	Kind          *string       `json:"kind"`
	NextPageToken *string       `json:"nextPageToken"`
}
