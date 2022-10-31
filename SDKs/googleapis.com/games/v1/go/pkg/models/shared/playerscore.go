package shared




type PlayerScoreTimeSpanEnum string

const (
    PlayerScoreTimeSpanEnumScoreTimeSpanUnspecified PlayerScoreTimeSpanEnum = "SCORE_TIME_SPAN_UNSPECIFIED"
PlayerScoreTimeSpanEnumAllTime PlayerScoreTimeSpanEnum = "ALL_TIME"
PlayerScoreTimeSpanEnumWeekly PlayerScoreTimeSpanEnum = "WEEKLY"
PlayerScoreTimeSpanEnumDaily PlayerScoreTimeSpanEnum = "DAILY"
)


type PlayerScore struct {
    FormattedScore *string `json:"formattedScore,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Score *string `json:"score,omitempty"`
    ScoreTag *string `json:"scoreTag,omitempty"`
    TimeSpan *PlayerScoreTimeSpanEnum `json:"timeSpan,omitempty"`
    
}

