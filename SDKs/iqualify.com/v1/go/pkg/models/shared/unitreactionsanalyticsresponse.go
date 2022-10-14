package shared

type UnitReactionsAnalyticsResponse struct {
	Feedback *UnitReactionsFeedback `json:"feedback,omitempty"`
	PageID   *bool                  `json:"pageId,omitempty"`
}
