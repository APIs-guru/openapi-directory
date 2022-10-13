package shared

type GoogleCloudContactcenterinsightsV1CalculateStatsResponse struct {
	AverageDuration             *string                                                                     `json:"averageDuration"`
	AverageTurnCount            *int32                                                                      `json:"averageTurnCount"`
	ConversationCount           *int32                                                                      `json:"conversationCount"`
	ConversationCountTimeSeries *GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries         `json:"conversationCountTimeSeries"`
	CustomHighlighterMatches    map[string]int32                                                            `json:"customHighlighterMatches"`
	IssueMatches                map[string]int32                                                            `json:"issueMatches"`
	IssueMatchesStats           map[string]GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats `json:"issueMatchesStats"`
	SmartHighlighterMatches     map[string]int32                                                            `json:"smartHighlighterMatches"`
}
