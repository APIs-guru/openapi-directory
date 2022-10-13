package shared

type LeaderboardOrderEnum string

const (
	LeaderboardOrderEnumScoreOrderUnspecified LeaderboardOrderEnum = "SCORE_ORDER_UNSPECIFIED"
	LeaderboardOrderEnumLargerIsBetter        LeaderboardOrderEnum = "LARGER_IS_BETTER"
	LeaderboardOrderEnumSmallerIsBetter       LeaderboardOrderEnum = "SMALLER_IS_BETTER"
)

type Leaderboard struct {
	IconURL          *string               `json:"iconUrl"`
	ID               *string               `json:"id"`
	IsIconURLDefault *bool                 `json:"isIconUrlDefault"`
	Kind             *string               `json:"kind"`
	Name             *string               `json:"name"`
	Order            *LeaderboardOrderEnum `json:"order"`
}
