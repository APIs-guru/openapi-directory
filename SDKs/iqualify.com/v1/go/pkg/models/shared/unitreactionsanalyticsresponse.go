package shared

type UnitReactionsAnalyticsResponse struct {
	Feedback *UnitReactionsFeedback `json:"feedback"`
	PageID   *bool                  `json:"pageId"`
}
