package shared

type PlayerScoreResponseBeatenScoreTimeSpansEnum string

const (
	PlayerScoreResponseBeatenScoreTimeSpansEnumScoreTimeSpanUnspecified PlayerScoreResponseBeatenScoreTimeSpansEnum = "SCORE_TIME_SPAN_UNSPECIFIED"
	PlayerScoreResponseBeatenScoreTimeSpansEnumAllTime                  PlayerScoreResponseBeatenScoreTimeSpansEnum = "ALL_TIME"
	PlayerScoreResponseBeatenScoreTimeSpansEnumWeekly                   PlayerScoreResponseBeatenScoreTimeSpansEnum = "WEEKLY"
	PlayerScoreResponseBeatenScoreTimeSpansEnumDaily                    PlayerScoreResponseBeatenScoreTimeSpansEnum = "DAILY"
)

// PlayerScoreResponse
// A list of leaderboard entry resources.
type PlayerScoreResponse struct {
	BeatenScoreTimeSpans []PlayerScoreResponseBeatenScoreTimeSpansEnum `json:"beatenScoreTimeSpans,omitempty"`
	FormattedScore       *string                                       `json:"formattedScore,omitempty"`
	Kind                 *string                                       `json:"kind,omitempty"`
	LeaderboardID        *string                                       `json:"leaderboardId,omitempty"`
	ScoreTag             *string                                       `json:"scoreTag,omitempty"`
	UnbeatenScores       []PlayerScore                                 `json:"unbeatenScores,omitempty"`
}
