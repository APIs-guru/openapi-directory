package shared

type P2MpNetworkServiceRequest struct {
	BillingAccount   string  `json:"billing_account"`
	ConsumingAccount string  `json:"consuming_account"`
	ContractRef      *string `json:"contract_ref,omitempty"`
	ExternalRef      *string `json:"external_ref,omitempty"`
	ManagingAccount  string  `json:"managing_account"`
	Name             string  `json:"name"`
	ProductOffering  string  `json:"product_offering"`
	Public           *bool   `json:"public,omitempty"`
	PurchaseOrder    *string `json:"purchase_order,omitempty"`
	Type             string  `json:"type"`
}
