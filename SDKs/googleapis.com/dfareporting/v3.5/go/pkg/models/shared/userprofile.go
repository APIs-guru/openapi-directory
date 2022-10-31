package shared



type UserProfile struct {
    AccountID *string `json:"accountId,omitempty"`
    AccountName *string `json:"accountName,omitempty"`
    Etag *string `json:"etag,omitempty"`
    Kind *string `json:"kind,omitempty"`
    ProfileID *string `json:"profileId,omitempty"`
    SubAccountID *string `json:"subAccountId,omitempty"`
    SubAccountName *string `json:"subAccountName,omitempty"`
    UserName *string `json:"userName,omitempty"`
    
}

