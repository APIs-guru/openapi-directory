package shared

type AccountDetailsUsageEnum string

const (
	AccountDetailsUsageEnumPriv AccountDetailsUsageEnum = "PRIV"
	AccountDetailsUsageEnumOrga AccountDetailsUsageEnum = "ORGA"
)

type AccountDetails struct {
	Links           map[string]HrefType      `json:"_links,omitempty"`
	Balances        []Balance                `json:"balances,omitempty"`
	Bban            *string                  `json:"bban,omitempty"`
	Bic             *string                  `json:"bic,omitempty"`
	CashAccountType *string                  `json:"cashAccountType,omitempty"`
	Currency        string                   `json:"currency"`
	Details         *string                  `json:"details,omitempty"`
	DisplayName     *string                  `json:"displayName,omitempty"`
	Iban            *string                  `json:"iban,omitempty"`
	LinkedAccounts  *string                  `json:"linkedAccounts,omitempty"`
	Msisdn          *string                  `json:"msisdn,omitempty"`
	Name            *string                  `json:"name,omitempty"`
	OwnerName       *string                  `json:"ownerName,omitempty"`
	Product         *string                  `json:"product,omitempty"`
	ResourceID      *string                  `json:"resourceId,omitempty"`
	Status          *AccountStatusEnum       `json:"status,omitempty"`
	Usage           *AccountDetailsUsageEnum `json:"usage,omitempty"`
}
