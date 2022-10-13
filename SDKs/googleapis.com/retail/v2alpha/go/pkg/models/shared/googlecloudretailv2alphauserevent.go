package shared

type GoogleCloudRetailV2alphaUserEvent struct {
	Attributes          map[string]GoogleCloudRetailV2alphaCustomAttribute `json:"attributes"`
	AttributionToken    *string                                            `json:"attributionToken"`
	CartID              *string                                            `json:"cartId"`
	CompletionDetail    *GoogleCloudRetailV2alphaCompletionDetail          `json:"completionDetail"`
	EventTime           *string                                            `json:"eventTime"`
	EventType           *string                                            `json:"eventType"`
	ExperimentIds       []string                                           `json:"experimentIds"`
	Filter              *string                                            `json:"filter"`
	Offset              *int32                                             `json:"offset"`
	OrderBy             *string                                            `json:"orderBy"`
	PageCategories      []string                                           `json:"pageCategories"`
	PageViewID          *string                                            `json:"pageViewId"`
	ProductDetails      []GoogleCloudRetailV2alphaProductDetail            `json:"productDetails"`
	PurchaseTransaction *GoogleCloudRetailV2alphaPurchaseTransaction       `json:"purchaseTransaction"`
	ReferrerURI         *string                                            `json:"referrerUri"`
	SearchQuery         *string                                            `json:"searchQuery"`
	SessionID           *string                                            `json:"sessionId"`
	URI                 *string                                            `json:"uri"`
	UserInfo            *GoogleCloudRetailV2alphaUserInfo                  `json:"userInfo"`
	VisitorID           *string                                            `json:"visitorId"`
}
