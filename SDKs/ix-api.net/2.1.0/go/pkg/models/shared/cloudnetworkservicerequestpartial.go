package shared

type CloudNetworkServiceRequestPartial struct {
	BillingAccount   *string `json:"billing_account"`
	Capacity         *int64  `json:"capacity"`
	CloudKey         *string `json:"cloud_key"`
	ConsumingAccount *string `json:"consuming_account"`
	ContractRef      *string `json:"contract_ref"`
	ExternalRef      *string `json:"external_ref"`
	ManagingAccount  *string `json:"managing_account"`
	ProductOffering  *string `json:"product_offering"`
	PurchaseOrder    *string `json:"purchase_order"`
	Type             string  `json:"type"`
}
