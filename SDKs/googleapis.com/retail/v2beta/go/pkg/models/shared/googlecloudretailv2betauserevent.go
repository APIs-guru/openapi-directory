package shared



type GoogleCloudRetailV2betaUserEvent struct {
    Attributes map[string]GoogleCloudRetailV2betaCustomAttribute `json:"attributes,omitempty"`
    AttributionToken *string `json:"attributionToken,omitempty"`
    CartID *string `json:"cartId,omitempty"`
    CompletionDetail *GoogleCloudRetailV2betaCompletionDetail `json:"completionDetail,omitempty"`
    EventTime *string `json:"eventTime,omitempty"`
    EventType *string `json:"eventType,omitempty"`
    ExperimentIds []string `json:"experimentIds,omitempty"`
    Filter *string `json:"filter,omitempty"`
    Offset *int32 `json:"offset,omitempty"`
    OrderBy *string `json:"orderBy,omitempty"`
    PageCategories []string `json:"pageCategories,omitempty"`
    PageViewID *string `json:"pageViewId,omitempty"`
    ProductDetails []GoogleCloudRetailV2betaProductDetail `json:"productDetails,omitempty"`
    PurchaseTransaction *GoogleCloudRetailV2betaPurchaseTransaction `json:"purchaseTransaction,omitempty"`
    ReferrerURI *string `json:"referrerUri,omitempty"`
    SearchQuery *string `json:"searchQuery,omitempty"`
    SessionID *string `json:"sessionId,omitempty"`
    URI *string `json:"uri,omitempty"`
    UserInfo *GoogleCloudRetailV2betaUserInfo `json:"userInfo,omitempty"`
    VisitorID *string `json:"visitorId,omitempty"`
    
}

