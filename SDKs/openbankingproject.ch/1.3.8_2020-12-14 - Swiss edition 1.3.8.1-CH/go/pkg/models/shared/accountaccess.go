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

type AccountAccess struct {
	Accounts                     []AccountReference16Ch                         `json:"accounts"`
	AdditionalInformation        *AdditionalInformationAccess                   `json:"additionalInformation"`
	AllPsd2                      *AccountAccessAllPsd2Enum                      `json:"allPsd2"`
	AvailableAccounts            *AccountAccessAvailableAccountsEnum            `json:"availableAccounts"`
	AvailableAccountsWithBalance *AccountAccessAvailableAccountsWithBalanceEnum `json:"availableAccountsWithBalance"`
	Balances                     []AccountReference16Ch                         `json:"balances"`
	RestrictedTo                 []string                                       `json:"restrictedTo"`
	Transactions                 []AccountReference16Ch                         `json:"transactions"`
}
