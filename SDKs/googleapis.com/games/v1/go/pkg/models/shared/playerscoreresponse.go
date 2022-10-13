package shared

type PlayerScoreResponseBeatenScoreTimeSpansEnum string

const (
	PlayerScoreResponseBeatenScoreTimeSpansEnumScoreTimeSpanUnspecified PlayerScoreResponseBeatenScoreTimeSpansEnum = "SCORE_TIME_SPAN_UNSPECIFIED"
	PlayerScoreResponseBeatenScoreTimeSpansEnumAllTime                  PlayerScoreResponseBeatenScoreTimeSpansEnum = "ALL_TIME"
	PlayerScoreResponseBeatenScoreTimeSpansEnumWeekly                   PlayerScoreResponseBeatenScoreTimeSpansEnum = "WEEKLY"
	PlayerScoreResponseBeatenScoreTimeSpansEnumDaily                    PlayerScoreResponseBeatenScoreTimeSpansEnum = "DAILY"
)

type PlayerScoreResponse struct {
	BeatenScoreTimeSpans []PlayerScoreResponseBeatenScoreTimeSpansEnum `json:"beatenScoreTimeSpans"`
	FormattedScore       *string                                       `json:"formattedScore"`
	Kind                 *string                                       `json:"kind"`
	LeaderboardID        *string                                       `json:"leaderboardId"`
	ScoreTag             *string                                       `json:"scoreTag"`
	UnbeatenScores       []PlayerScore                                 `json:"unbeatenScores"`
}
