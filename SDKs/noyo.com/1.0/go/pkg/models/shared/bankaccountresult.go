package shared

type BankAccountResultStatusEnum string

const (
	BankAccountResultStatusEnumCreated BankAccountResultStatusEnum = "created"
	BankAccountResultStatusEnumWiped   BankAccountResultStatusEnum = "wiped"
)

type BankAccountResult struct {
	AccountNumber string                      `json:"account_number"`
	ApplicationID string                      `json:"application_id"`
	BankName      string                      `json:"bank_name"`
	Created       int64                       `json:"created"`
	ID            string                      `json:"id"`
	IsChecking    bool                        `json:"is_checking"`
	Modified      int64                       `json:"modified"`
	RoutingNumber string                      `json:"routing_number"`
	Status        BankAccountResultStatusEnum `json:"status"`
	Version       string                      `json:"version"`
}
