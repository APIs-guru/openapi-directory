package shared

type AccountAccessAllPsd2Enum string

const (
	AccountAccessAllPsd2EnumAllAccounts              AccountAccessAllPsd2Enum = "allAccounts"
	AccountAccessAllPsd2EnumAllAccountsWithOwnerName AccountAccessAllPsd2Enum = "allAccountsWithOwnerName"
)

type AccountAccessAvailableAccountsEnum string

const (
	AccountAccessAvailableAccountsEnumAllAccounts              AccountAccessAvailableAccountsEnum = "allAccounts"
	AccountAccessAvailableAccountsEnumAllAccountsWithOwnerName AccountAccessAvailableAccountsEnum = "allAccountsWithOwnerName"
)

type AccountAccessAvailableAccountsWithBalanceEnum string

const (
	AccountAccessAvailableAccountsWithBalanceEnumAllAccounts              AccountAccessAvailableAccountsWithBalanceEnum = "allAccounts"
	AccountAccessAvailableAccountsWithBalanceEnumAllAccountsWithOwnerName AccountAccessAvailableAccountsWithBalanceEnum = "allAccountsWithOwnerName"
)

// AccountAccess
// Requested access services for a consent.
type AccountAccess struct {
	Accounts                     []AccountReference16Ch                         `json:"accounts,omitempty"`
	AdditionalInformation        *AdditionalInformationAccess                   `json:"additionalInformation,omitempty"`
	AllPsd2                      *AccountAccessAllPsd2Enum                      `json:"allPsd2,omitempty"`
	AvailableAccounts            *AccountAccessAvailableAccountsEnum            `json:"availableAccounts,omitempty"`
	AvailableAccountsWithBalance *AccountAccessAvailableAccountsWithBalanceEnum `json:"availableAccountsWithBalance,omitempty"`
	Balances                     []AccountReference16Ch                         `json:"balances,omitempty"`
	RestrictedTo                 []string                                       `json:"restrictedTo,omitempty"`
	Transactions                 []AccountReference16Ch                         `json:"transactions,omitempty"`
}
