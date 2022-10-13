package shared

type GoogleCloudRetailV2UserEvent struct {
	Attributes          map[string]GoogleCloudRetailV2CustomAttribute `json:"attributes"`
	AttributionToken    *string                                       `json:"attributionToken"`
	CartID              *string                                       `json:"cartId"`
	CompletionDetail    *GoogleCloudRetailV2CompletionDetail          `json:"completionDetail"`
	EventTime           *string                                       `json:"eventTime"`
	EventType           *string                                       `json:"eventType"`
	ExperimentIds       []string                                      `json:"experimentIds"`
	Filter              *string                                       `json:"filter"`
	Offset              *int32                                        `json:"offset"`
	OrderBy             *string                                       `json:"orderBy"`
	PageCategories      []string                                      `json:"pageCategories"`
	PageViewID          *string                                       `json:"pageViewId"`
	ProductDetails      []GoogleCloudRetailV2ProductDetail            `json:"productDetails"`
	PurchaseTransaction *GoogleCloudRetailV2PurchaseTransaction       `json:"purchaseTransaction"`
	ReferrerURI         *string                                       `json:"referrerUri"`
	SearchQuery         *string                                       `json:"searchQuery"`
	SessionID           *string                                       `json:"sessionId"`
	URI                 *string                                       `json:"uri"`
	UserInfo            *GoogleCloudRetailV2UserInfo                  `json:"userInfo"`
	VisitorID           *string                                       `json:"visitorId"`
}
