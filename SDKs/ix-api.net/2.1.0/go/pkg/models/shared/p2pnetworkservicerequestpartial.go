package shared

type P2PNetworkServiceRequestPartial struct {
	BillingAccount       *string `json:"billing_account,omitempty"`
	ConsumingAccount     *string `json:"consuming_account,omitempty"`
	ContractRef          *string `json:"contract_ref,omitempty"`
	ExternalRef          *string `json:"external_ref,omitempty"`
	JoiningMemberAccount *string `json:"joining_member_account,omitempty"`
	ManagingAccount      *string `json:"managing_account,omitempty"`
	ProductOffering      *string `json:"product_offering,omitempty"`
	PurchaseOrder        *string `json:"purchase_order,omitempty"`
	Type                 string  `json:"type"`
}
