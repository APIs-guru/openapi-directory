package shared

type AccountStatusProducts struct {
	Channel         *string                       `json:"channel"`
	Country         *string                       `json:"country"`
	Destination     *string                       `json:"destination"`
	ItemLevelIssues []AccountStatusItemLevelIssue `json:"itemLevelIssues"`
	Statistics      *AccountStatusStatistics      `json:"statistics"`
}
