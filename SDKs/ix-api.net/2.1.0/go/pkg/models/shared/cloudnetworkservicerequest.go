package shared

type CloudNetworkServiceRequest struct {
	BillingAccount   string  `json:"billing_account"`
	Capacity         *int64  `json:"capacity,omitempty"`
	CloudKey         string  `json:"cloud_key"`
	ConsumingAccount string  `json:"consuming_account"`
	ContractRef      *string `json:"contract_ref,omitempty"`
	ExternalRef      *string `json:"external_ref,omitempty"`
	ManagingAccount  string  `json:"managing_account"`
	ProductOffering  string  `json:"product_offering"`
	PurchaseOrder    *string `json:"purchase_order,omitempty"`
	Type             string  `json:"type"`
}
