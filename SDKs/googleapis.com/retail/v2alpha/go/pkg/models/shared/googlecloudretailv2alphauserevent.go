package shared



type GoogleCloudRetailV2alphaUserEvent struct {
    Attributes map[string]GoogleCloudRetailV2alphaCustomAttribute `json:"attributes,omitempty"`
    AttributionToken *string `json:"attributionToken,omitempty"`
    CartID *string `json:"cartId,omitempty"`
    CompletionDetail *GoogleCloudRetailV2alphaCompletionDetail `json:"completionDetail,omitempty"`
    EventTime *string `json:"eventTime,omitempty"`
    EventType *string `json:"eventType,omitempty"`
    ExperimentIds []string `json:"experimentIds,omitempty"`
    Filter *string `json:"filter,omitempty"`
    Offset *int32 `json:"offset,omitempty"`
    OrderBy *string `json:"orderBy,omitempty"`
    PageCategories []string `json:"pageCategories,omitempty"`
    PageViewID *string `json:"pageViewId,omitempty"`
    ProductDetails []GoogleCloudRetailV2alphaProductDetail `json:"productDetails,omitempty"`
    PurchaseTransaction *GoogleCloudRetailV2alphaPurchaseTransaction `json:"purchaseTransaction,omitempty"`
    ReferrerURI *string `json:"referrerUri,omitempty"`
    SearchQuery *string `json:"searchQuery,omitempty"`
    SessionID *string `json:"sessionId,omitempty"`
    URI *string `json:"uri,omitempty"`
    UserInfo *GoogleCloudRetailV2alphaUserInfo `json:"userInfo,omitempty"`
    VisitorID *string `json:"visitorId,omitempty"`
    
}

