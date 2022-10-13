package shared

type AccountStatus struct {
	AccountID          *string                          `json:"accountId"`
	AccountLevelIssues []AccountStatusAccountLevelIssue `json:"accountLevelIssues"`
	DataQualityIssues  []AccountStatusDataQualityIssue  `json:"dataQualityIssues"`
	Kind               *string                          `json:"kind"`
	Products           []AccountStatusProducts          `json:"products"`
	WebsiteClaimed     *bool                            `json:"websiteClaimed"`
}
