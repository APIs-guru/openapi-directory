package shared

type CloudNetworkServiceRequestPartial struct {
	BillingAccount   *string `json:"billing_account,omitempty"`
	Capacity         *int64  `json:"capacity,omitempty"`
	CloudKey         *string `json:"cloud_key,omitempty"`
	ConsumingAccount *string `json:"consuming_account,omitempty"`
	ContractRef      *string `json:"contract_ref,omitempty"`
	ExternalRef      *string `json:"external_ref,omitempty"`
	ManagingAccount  *string `json:"managing_account,omitempty"`
	ProductOffering  *string `json:"product_offering,omitempty"`
	PurchaseOrder    *string `json:"purchase_order,omitempty"`
	Type             string  `json:"type"`
}
