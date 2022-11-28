package shared

// GoogleCloudDiscoveryengineV1betaUserEvent
// UserEvent captures all metadata information Discovery Engine API needs to know about how end users interact with customers' website.
type GoogleCloudDiscoveryengineV1betaUserEvent struct {
	Attributes        map[string]GoogleCloudDiscoveryengineV1betaCustomAttribute `json:"attributes,omitempty"`
	AttributionToken  *string                                                    `json:"attributionToken,omitempty"`
	CompletionInfo    *GoogleCloudDiscoveryengineV1betaCompletionInfo            `json:"completionInfo,omitempty"`
	DirectUserRequest *bool                                                      `json:"directUserRequest,omitempty"`
	Documents         []GoogleCloudDiscoveryengineV1betaDocumentInfo             `json:"documents,omitempty"`
	EventTime         *string                                                    `json:"eventTime,omitempty"`
	EventType         *string                                                    `json:"eventType,omitempty"`
	Filter            *string                                                    `json:"filter,omitempty"`
	MediaInfo         *GoogleCloudDiscoveryengineV1betaMediaInfo                 `json:"mediaInfo,omitempty"`
	PageInfo          *GoogleCloudDiscoveryengineV1betaPageInfo                  `json:"pageInfo,omitempty"`
	Panel             *GoogleCloudDiscoveryengineV1betaPanelInfo                 `json:"panel,omitempty"`
	PromotionIds      []string                                                   `json:"promotionIds,omitempty"`
	SearchInfo        *GoogleCloudDiscoveryengineV1betaSearchInfo                `json:"searchInfo,omitempty"`
	SessionID         *string                                                    `json:"sessionId,omitempty"`
	TagIds            []string                                                   `json:"tagIds,omitempty"`
	TransactionInfo   *GoogleCloudDiscoveryengineV1betaTransactionInfo           `json:"transactionInfo,omitempty"`
	UserInfo          *GoogleCloudDiscoveryengineV1betaUserInfo                  `json:"userInfo,omitempty"`
	UserPseudoID      *string                                                    `json:"userPseudoId,omitempty"`
}
