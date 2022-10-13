package shared

type Order struct {
	AccountID              *string           `json:"accountId"`
	AdvertiserID           *string           `json:"advertiserId"`
	ApproverUserProfileIds []string          `json:"approverUserProfileIds"`
	BuyerInvoiceID         *string           `json:"buyerInvoiceId"`
	BuyerOrganizationName  *string           `json:"buyerOrganizationName"`
	Comments               *string           `json:"comments"`
	Contacts               []OrderContact    `json:"contacts"`
	ID                     *string           `json:"id"`
	Kind                   *string           `json:"kind"`
	LastModifiedInfo       *LastModifiedInfo `json:"lastModifiedInfo"`
	Name                   *string           `json:"name"`
	Notes                  *string           `json:"notes"`
	PlanningTermID         *string           `json:"planningTermId"`
	ProjectID              *string           `json:"projectId"`
	SellerOrderID          *string           `json:"sellerOrderId"`
	SellerOrganizationName *string           `json:"sellerOrganizationName"`
	SiteID                 []string          `json:"siteId"`
	SiteNames              []string          `json:"siteNames"`
	SubaccountID           *string           `json:"subaccountId"`
	TermsAndConditions     *string           `json:"termsAndConditions"`
}
