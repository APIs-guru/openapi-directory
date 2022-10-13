package shared

type LeaderboardEntryTimeSpanEnum string

const (
	LeaderboardEntryTimeSpanEnumScoreTimeSpanUnspecified LeaderboardEntryTimeSpanEnum = "SCORE_TIME_SPAN_UNSPECIFIED"
	LeaderboardEntryTimeSpanEnumAllTime                  LeaderboardEntryTimeSpanEnum = "ALL_TIME"
	LeaderboardEntryTimeSpanEnumWeekly                   LeaderboardEntryTimeSpanEnum = "WEEKLY"
	LeaderboardEntryTimeSpanEnumDaily                    LeaderboardEntryTimeSpanEnum = "DAILY"
)

type LeaderboardEntry struct {
	FormattedScore       *string                       `json:"formattedScore"`
	FormattedScoreRank   *string                       `json:"formattedScoreRank"`
	Kind                 *string                       `json:"kind"`
	Player               *Player                       `json:"player"`
	ScoreRank            *string                       `json:"scoreRank"`
	ScoreTag             *string                       `json:"scoreTag"`
	ScoreValue           *string                       `json:"scoreValue"`
	TimeSpan             *LeaderboardEntryTimeSpanEnum `json:"timeSpan"`
	WriteTimestampMillis *string                       `json:"writeTimestampMillis"`
}
