package shared

type PlayerLeaderboardScoreTimeSpanEnum string

const (
	PlayerLeaderboardScoreTimeSpanEnumScoreTimeSpanUnspecified PlayerLeaderboardScoreTimeSpanEnum = "SCORE_TIME_SPAN_UNSPECIFIED"
	PlayerLeaderboardScoreTimeSpanEnumAllTime                  PlayerLeaderboardScoreTimeSpanEnum = "ALL_TIME"
	PlayerLeaderboardScoreTimeSpanEnumWeekly                   PlayerLeaderboardScoreTimeSpanEnum = "WEEKLY"
	PlayerLeaderboardScoreTimeSpanEnumDaily                    PlayerLeaderboardScoreTimeSpanEnum = "DAILY"
)

type PlayerLeaderboardScore struct {
	FriendsRank    *LeaderboardScoreRank               `json:"friendsRank"`
	Kind           *string                             `json:"kind"`
	LeaderboardID  *string                             `json:"leaderboard_id"`
	PublicRank     *LeaderboardScoreRank               `json:"publicRank"`
	ScoreString    *string                             `json:"scoreString"`
	ScoreTag       *string                             `json:"scoreTag"`
	ScoreValue     *string                             `json:"scoreValue"`
	SocialRank     *LeaderboardScoreRank               `json:"socialRank"`
	TimeSpan       *PlayerLeaderboardScoreTimeSpanEnum `json:"timeSpan"`
	WriteTimestamp *string                             `json:"writeTimestamp"`
}
