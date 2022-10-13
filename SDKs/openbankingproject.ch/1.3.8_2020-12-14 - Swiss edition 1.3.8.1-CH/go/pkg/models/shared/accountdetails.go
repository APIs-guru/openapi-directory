package shared

type AccountDetailsUsageEnum string

const (
	AccountDetailsUsageEnumPriv AccountDetailsUsageEnum = "PRIV"
	AccountDetailsUsageEnumOrga AccountDetailsUsageEnum = "ORGA"
)

type AccountDetails struct {
	Links           map[string]HrefType      `json:"_links"`
	Balances        []Balance                `json:"balances"`
	Bban            *string                  `json:"bban"`
	Bic             *string                  `json:"bic"`
	CashAccountType *string                  `json:"cashAccountType"`
	Currency        string                   `json:"currency"`
	Details         *string                  `json:"details"`
	DisplayName     *string                  `json:"displayName"`
	Iban            *string                  `json:"iban"`
	LinkedAccounts  *string                  `json:"linkedAccounts"`
	Msisdn          *string                  `json:"msisdn"`
	Name            *string                  `json:"name"`
	OwnerName       *string                  `json:"ownerName"`
	Product         *string                  `json:"product"`
	ResourceID      *string                  `json:"resourceId"`
	Status          *AccountStatusEnum       `json:"status"`
	Usage           *AccountDetailsUsageEnum `json:"usage"`
}
