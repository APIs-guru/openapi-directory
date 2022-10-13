package shared

type PlayerScoreTimeSpanEnum string

const (
	PlayerScoreTimeSpanEnumScoreTimeSpanUnspecified PlayerScoreTimeSpanEnum = "SCORE_TIME_SPAN_UNSPECIFIED"
	PlayerScoreTimeSpanEnumAllTime                  PlayerScoreTimeSpanEnum = "ALL_TIME"
	PlayerScoreTimeSpanEnumWeekly                   PlayerScoreTimeSpanEnum = "WEEKLY"
	PlayerScoreTimeSpanEnumDaily                    PlayerScoreTimeSpanEnum = "DAILY"
)

type PlayerScore struct {
	FormattedScore *string                  `json:"formattedScore"`
	Kind           *string                  `json:"kind"`
	Score          *string                  `json:"score"`
	ScoreTag       *string                  `json:"scoreTag"`
	TimeSpan       *PlayerScoreTimeSpanEnum `json:"timeSpan"`
}
