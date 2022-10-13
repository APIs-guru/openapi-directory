package shared

type AccountStatus struct {
	AccountID          *string                          `json:"accountId"`
	AccountLevelIssues []AccountStatusAccountLevelIssue `json:"accountLevelIssues"`
	AccountManagement  *string                          `json:"accountManagement"`
	Kind               *string                          `json:"kind"`
	Products           []AccountStatusProducts          `json:"products"`
	WebsiteClaimed     *bool                            `json:"websiteClaimed"`
}
