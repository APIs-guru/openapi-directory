package shared

type PlayerLeaderboardScoreTimeSpanEnum string

const (
	PlayerLeaderboardScoreTimeSpanEnumScoreTimeSpanUnspecified PlayerLeaderboardScoreTimeSpanEnum = "SCORE_TIME_SPAN_UNSPECIFIED"
	PlayerLeaderboardScoreTimeSpanEnumAllTime                  PlayerLeaderboardScoreTimeSpanEnum = "ALL_TIME"
	PlayerLeaderboardScoreTimeSpanEnumWeekly                   PlayerLeaderboardScoreTimeSpanEnum = "WEEKLY"
	PlayerLeaderboardScoreTimeSpanEnumDaily                    PlayerLeaderboardScoreTimeSpanEnum = "DAILY"
)

type PlayerLeaderboardScore struct {
	FriendsRank    *LeaderboardScoreRank               `json:"friendsRank,omitempty"`
	Kind           *string                             `json:"kind,omitempty"`
	LeaderboardID  *string                             `json:"leaderboard_id,omitempty"`
	PublicRank     *LeaderboardScoreRank               `json:"publicRank,omitempty"`
	ScoreString    *string                             `json:"scoreString,omitempty"`
	ScoreTag       *string                             `json:"scoreTag,omitempty"`
	ScoreValue     *string                             `json:"scoreValue,omitempty"`
	SocialRank     *LeaderboardScoreRank               `json:"socialRank,omitempty"`
	TimeSpan       *PlayerLeaderboardScoreTimeSpanEnum `json:"timeSpan,omitempty"`
	WriteTimestamp *string                             `json:"writeTimestamp,omitempty"`
}
