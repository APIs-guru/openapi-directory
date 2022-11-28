package shared

type LeaderboardEntryTimeSpanEnum string

const (
	LeaderboardEntryTimeSpanEnumScoreTimeSpanUnspecified LeaderboardEntryTimeSpanEnum = "SCORE_TIME_SPAN_UNSPECIFIED"
	LeaderboardEntryTimeSpanEnumAllTime                  LeaderboardEntryTimeSpanEnum = "ALL_TIME"
	LeaderboardEntryTimeSpanEnumWeekly                   LeaderboardEntryTimeSpanEnum = "WEEKLY"
	LeaderboardEntryTimeSpanEnumDaily                    LeaderboardEntryTimeSpanEnum = "DAILY"
)

// LeaderboardEntry
// The Leaderboard Entry resource.
type LeaderboardEntry struct {
	FormattedScore       *string                       `json:"formattedScore,omitempty"`
	FormattedScoreRank   *string                       `json:"formattedScoreRank,omitempty"`
	Kind                 *string                       `json:"kind,omitempty"`
	Player               *Player                       `json:"player,omitempty"`
	ScoreRank            *string                       `json:"scoreRank,omitempty"`
	ScoreTag             *string                       `json:"scoreTag,omitempty"`
	ScoreValue           *string                       `json:"scoreValue,omitempty"`
	TimeSpan             *LeaderboardEntryTimeSpanEnum `json:"timeSpan,omitempty"`
	WriteTimestampMillis *string                       `json:"writeTimestampMillis,omitempty"`
}
