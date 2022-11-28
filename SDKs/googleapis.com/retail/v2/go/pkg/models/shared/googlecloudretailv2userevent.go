package shared

// GoogleCloudRetailV2UserEvent
// UserEvent captures all metadata information Retail API needs to know about how end users interact with customers' website.
type GoogleCloudRetailV2UserEvent struct {
	Attributes          map[string]GoogleCloudRetailV2CustomAttribute `json:"attributes,omitempty"`
	AttributionToken    *string                                       `json:"attributionToken,omitempty"`
	CartID              *string                                       `json:"cartId,omitempty"`
	CompletionDetail    *GoogleCloudRetailV2CompletionDetail          `json:"completionDetail,omitempty"`
	EventTime           *string                                       `json:"eventTime,omitempty"`
	EventType           *string                                       `json:"eventType,omitempty"`
	ExperimentIds       []string                                      `json:"experimentIds,omitempty"`
	Filter              *string                                       `json:"filter,omitempty"`
	Offset              *int32                                        `json:"offset,omitempty"`
	OrderBy             *string                                       `json:"orderBy,omitempty"`
	PageCategories      []string                                      `json:"pageCategories,omitempty"`
	PageViewID          *string                                       `json:"pageViewId,omitempty"`
	ProductDetails      []GoogleCloudRetailV2ProductDetail            `json:"productDetails,omitempty"`
	PurchaseTransaction *GoogleCloudRetailV2PurchaseTransaction       `json:"purchaseTransaction,omitempty"`
	ReferrerURI         *string                                       `json:"referrerUri,omitempty"`
	SearchQuery         *string                                       `json:"searchQuery,omitempty"`
	SessionID           *string                                       `json:"sessionId,omitempty"`
	URI                 *string                                       `json:"uri,omitempty"`
	UserInfo            *GoogleCloudRetailV2UserInfo                  `json:"userInfo,omitempty"`
	VisitorID           *string                                       `json:"visitorId,omitempty"`
}

// GoogleCloudRetailV2UserEventInput
// UserEvent captures all metadata information Retail API needs to know about how end users interact with customers' website.
type GoogleCloudRetailV2UserEventInput struct {
	Attributes          map[string]GoogleCloudRetailV2CustomAttribute `json:"attributes,omitempty"`
	AttributionToken    *string                                       `json:"attributionToken,omitempty"`
	CartID              *string                                       `json:"cartId,omitempty"`
	CompletionDetail    *GoogleCloudRetailV2CompletionDetail          `json:"completionDetail,omitempty"`
	EventTime           *string                                       `json:"eventTime,omitempty"`
	EventType           *string                                       `json:"eventType,omitempty"`
	ExperimentIds       []string                                      `json:"experimentIds,omitempty"`
	Filter              *string                                       `json:"filter,omitempty"`
	Offset              *int32                                        `json:"offset,omitempty"`
	OrderBy             *string                                       `json:"orderBy,omitempty"`
	PageCategories      []string                                      `json:"pageCategories,omitempty"`
	PageViewID          *string                                       `json:"pageViewId,omitempty"`
	ProductDetails      []GoogleCloudRetailV2ProductDetailInput       `json:"productDetails,omitempty"`
	PurchaseTransaction *GoogleCloudRetailV2PurchaseTransaction       `json:"purchaseTransaction,omitempty"`
	ReferrerURI         *string                                       `json:"referrerUri,omitempty"`
	SearchQuery         *string                                       `json:"searchQuery,omitempty"`
	SessionID           *string                                       `json:"sessionId,omitempty"`
	URI                 *string                                       `json:"uri,omitempty"`
	UserInfo            *GoogleCloudRetailV2UserInfo                  `json:"userInfo,omitempty"`
	VisitorID           *string                                       `json:"visitorId,omitempty"`
}
