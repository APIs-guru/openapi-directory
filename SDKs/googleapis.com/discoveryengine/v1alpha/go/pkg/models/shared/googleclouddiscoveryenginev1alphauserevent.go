package shared

// GoogleCloudDiscoveryengineV1alphaUserEvent
// UserEvent captures all metadata information Discovery Engine API needs to know about how end users interact with customers' website.
type GoogleCloudDiscoveryengineV1alphaUserEvent struct {
	Attributes        map[string]GoogleCloudDiscoveryengineV1alphaCustomAttribute `json:"attributes,omitempty"`
	AttributionToken  *string                                                     `json:"attributionToken,omitempty"`
	CompletionInfo    *GoogleCloudDiscoveryengineV1alphaCompletionInfo            `json:"completionInfo,omitempty"`
	DirectUserRequest *bool                                                       `json:"directUserRequest,omitempty"`
	Documents         []GoogleCloudDiscoveryengineV1alphaDocumentInfo             `json:"documents,omitempty"`
	EventTime         *string                                                     `json:"eventTime,omitempty"`
	EventType         *string                                                     `json:"eventType,omitempty"`
	Filter            *string                                                     `json:"filter,omitempty"`
	MediaInfo         *GoogleCloudDiscoveryengineV1alphaMediaInfo                 `json:"mediaInfo,omitempty"`
	PageInfo          *GoogleCloudDiscoveryengineV1alphaPageInfo                  `json:"pageInfo,omitempty"`
	Panel             *GoogleCloudDiscoveryengineV1alphaPanelInfo                 `json:"panel,omitempty"`
	PromotionIds      []string                                                    `json:"promotionIds,omitempty"`
	SearchInfo        *GoogleCloudDiscoveryengineV1alphaSearchInfo                `json:"searchInfo,omitempty"`
	SessionID         *string                                                     `json:"sessionId,omitempty"`
	TagIds            []string                                                    `json:"tagIds,omitempty"`
	TransactionInfo   *GoogleCloudDiscoveryengineV1alphaTransactionInfo           `json:"transactionInfo,omitempty"`
	UserInfo          *GoogleCloudDiscoveryengineV1alphaUserInfo                  `json:"userInfo,omitempty"`
	UserPseudoID      *string                                                     `json:"userPseudoId,omitempty"`
}
