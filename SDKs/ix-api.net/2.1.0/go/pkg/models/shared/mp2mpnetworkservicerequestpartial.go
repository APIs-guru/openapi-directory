package shared

type Mp2MpNetworkServiceRequestPartial struct {
	BillingAccount   *string `json:"billing_account,omitempty"`
	ConsumingAccount *string `json:"consuming_account,omitempty"`
	ContractRef      *string `json:"contract_ref,omitempty"`
	ExternalRef      *string `json:"external_ref,omitempty"`
	ManagingAccount  *string `json:"managing_account,omitempty"`
	Name             *string `json:"name,omitempty"`
	ProductOffering  *string `json:"product_offering,omitempty"`
	Public           *bool   `json:"public,omitempty"`
	PurchaseOrder    *string `json:"purchase_order,omitempty"`
	Type             string  `json:"type"`
}
