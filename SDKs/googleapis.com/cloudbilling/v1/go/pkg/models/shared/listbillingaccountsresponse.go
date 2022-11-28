package shared

// ListBillingAccountsResponse
// Response message for `ListBillingAccounts`.
type ListBillingAccountsResponse struct {
	BillingAccounts []BillingAccount `json:"billingAccounts,omitempty"`
	NextPageToken   *string          `json:"nextPageToken,omitempty"`
}
