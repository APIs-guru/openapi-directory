package shared

// Order
// Describes properties of a Planning order.
type Order struct {
	AccountID              *string           `json:"accountId,omitempty"`
	AdvertiserID           *string           `json:"advertiserId,omitempty"`
	ApproverUserProfileIds []string          `json:"approverUserProfileIds,omitempty"`
	BuyerInvoiceID         *string           `json:"buyerInvoiceId,omitempty"`
	BuyerOrganizationName  *string           `json:"buyerOrganizationName,omitempty"`
	Comments               *string           `json:"comments,omitempty"`
	Contacts               []OrderContact    `json:"contacts,omitempty"`
	ID                     *string           `json:"id,omitempty"`
	Kind                   *string           `json:"kind,omitempty"`
	LastModifiedInfo       *LastModifiedInfo `json:"lastModifiedInfo,omitempty"`
	Name                   *string           `json:"name,omitempty"`
	Notes                  *string           `json:"notes,omitempty"`
	PlanningTermID         *string           `json:"planningTermId,omitempty"`
	ProjectID              *string           `json:"projectId,omitempty"`
	SellerOrderID          *string           `json:"sellerOrderId,omitempty"`
	SellerOrganizationName *string           `json:"sellerOrganizationName,omitempty"`
	SiteID                 []string          `json:"siteId,omitempty"`
	SiteNames              []string          `json:"siteNames,omitempty"`
	SubaccountID           *string           `json:"subaccountId,omitempty"`
	TermsAndConditions     *string           `json:"termsAndConditions,omitempty"`
}
