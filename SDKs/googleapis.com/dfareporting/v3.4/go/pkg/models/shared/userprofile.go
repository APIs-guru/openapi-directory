package shared

type UserProfile struct {
	AccountID      *string `json:"accountId"`
	AccountName    *string `json:"accountName"`
	Etag           *string `json:"etag"`
	Kind           *string `json:"kind"`
	ProfileID      *string `json:"profileId"`
	SubAccountID   *string `json:"subAccountId"`
	SubAccountName *string `json:"subAccountName"`
	UserName       *string `json:"userName"`
}
