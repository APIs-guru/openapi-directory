package shared

type GoogleCloudRetailV2betaUserEvent struct {
	Attributes          map[string]GoogleCloudRetailV2betaCustomAttribute `json:"attributes"`
	AttributionToken    *string                                           `json:"attributionToken"`
	CartID              *string                                           `json:"cartId"`
	CompletionDetail    *GoogleCloudRetailV2betaCompletionDetail          `json:"completionDetail"`
	EventTime           *string                                           `json:"eventTime"`
	EventType           *string                                           `json:"eventType"`
	ExperimentIds       []string                                          `json:"experimentIds"`
	Filter              *string                                           `json:"filter"`
	Offset              *int32                                            `json:"offset"`
	OrderBy             *string                                           `json:"orderBy"`
	PageCategories      []string                                          `json:"pageCategories"`
	PageViewID          *string                                           `json:"pageViewId"`
	ProductDetails      []GoogleCloudRetailV2betaProductDetail            `json:"productDetails"`
	PurchaseTransaction *GoogleCloudRetailV2betaPurchaseTransaction       `json:"purchaseTransaction"`
	ReferrerURI         *string                                           `json:"referrerUri"`
	SearchQuery         *string                                           `json:"searchQuery"`
	SessionID           *string                                           `json:"sessionId"`
	URI                 *string                                           `json:"uri"`
	UserInfo            *GoogleCloudRetailV2betaUserInfo                  `json:"userInfo"`
	VisitorID           *string                                           `json:"visitorId"`
}
