package shared



type GoogleCloudContactcenterinsightsV1CalculateStatsResponse struct {
    AverageDuration *string `json:"averageDuration,omitempty"`
    AverageTurnCount *int32 `json:"averageTurnCount,omitempty"`
    ConversationCount *int32 `json:"conversationCount,omitempty"`
    ConversationCountTimeSeries *GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries `json:"conversationCountTimeSeries,omitempty"`
    CustomHighlighterMatches map[string]int32 `json:"customHighlighterMatches,omitempty"`
    IssueMatches map[string]int32 `json:"issueMatches,omitempty"`
    IssueMatchesStats map[string]GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats `json:"issueMatchesStats,omitempty"`
    SmartHighlighterMatches map[string]int32 `json:"smartHighlighterMatches,omitempty"`
    
}

