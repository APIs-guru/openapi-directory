package shared

type P2PNetworkServiceRequest struct {
	BillingAccount       string  `json:"billing_account"`
	ConsumingAccount     string  `json:"consuming_account"`
	ContractRef          *string `json:"contract_ref,omitempty"`
	ExternalRef          *string `json:"external_ref,omitempty"`
	JoiningMemberAccount string  `json:"joining_member_account"`
	ManagingAccount      string  `json:"managing_account"`
	ProductOffering      string  `json:"product_offering"`
	PurchaseOrder        *string `json:"purchase_order,omitempty"`
	Type                 string  `json:"type"`
}
