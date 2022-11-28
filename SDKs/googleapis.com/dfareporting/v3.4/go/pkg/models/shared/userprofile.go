package shared

// UserProfile
// A UserProfile resource lets you list all DFA user profiles that are associated with a Google user account. The profile_id needs to be specified in other API requests.
type UserProfile struct {
	AccountID      *string `json:"accountId,omitempty"`
	AccountName    *string `json:"accountName,omitempty"`
	Etag           *string `json:"etag,omitempty"`
	Kind           *string `json:"kind,omitempty"`
	ProfileID      *string `json:"profileId,omitempty"`
	SubAccountID   *string `json:"subAccountId,omitempty"`
	SubAccountName *string `json:"subAccountName,omitempty"`
	UserName       *string `json:"userName,omitempty"`
}
