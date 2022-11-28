package shared

// AccountStatus
// The status of an account, that is, information about its products, which is computed offline and not returned immediately at insertion time.
type AccountStatus struct {
	AccountID          *string                          `json:"accountId,omitempty"`
	AccountLevelIssues []AccountStatusAccountLevelIssue `json:"accountLevelIssues,omitempty"`
	AccountManagement  *string                          `json:"accountManagement,omitempty"`
	Kind               *string                          `json:"kind,omitempty"`
	Products           []AccountStatusProducts          `json:"products,omitempty"`
	WebsiteClaimed     *bool                            `json:"websiteClaimed,omitempty"`
}
