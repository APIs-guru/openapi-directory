package shared

type P2MpNetworkServiceRequestPartial struct {
	BillingAccount   *string `json:"billing_account"`
	ConsumingAccount *string `json:"consuming_account"`
	ContractRef      *string `json:"contract_ref"`
	ExternalRef      *string `json:"external_ref"`
	ManagingAccount  *string `json:"managing_account"`
	Name             *string `json:"name"`
	ProductOffering  *string `json:"product_offering"`
	Public           *bool   `json:"public"`
	PurchaseOrder    *string `json:"purchase_order"`
	Type             string  `json:"type"`
}
