package shared




type LeaderboardOrderEnum string

const (
    LeaderboardOrderEnumScoreOrderUnspecified LeaderboardOrderEnum = "SCORE_ORDER_UNSPECIFIED"
LeaderboardOrderEnumLargerIsBetter LeaderboardOrderEnum = "LARGER_IS_BETTER"
LeaderboardOrderEnumSmallerIsBetter LeaderboardOrderEnum = "SMALLER_IS_BETTER"
)


type Leaderboard struct {
    IconURL *string `json:"iconUrl,omitempty"`
    ID *string `json:"id,omitempty"`
    IsIconURLDefault *bool `json:"isIconUrlDefault,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Name *string `json:"name,omitempty"`
    Order *LeaderboardOrderEnum `json:"order,omitempty"`
    
}

