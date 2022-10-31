package shared



type AccountStatusProducts struct {
    Channel *string `json:"channel,omitempty"`
    Country *string `json:"country,omitempty"`
    Destination *string `json:"destination,omitempty"`
    ItemLevelIssues []AccountStatusItemLevelIssue `json:"itemLevelIssues,omitempty"`
    Statistics *AccountStatusStatistics `json:"statistics,omitempty"`
    
}

