package shared

type ListBillingAccountsResponse struct {
	BillingAccounts []BillingAccount `json:"billingAccounts"`
	NextPageToken   *string          `json:"nextPageToken"`
}
