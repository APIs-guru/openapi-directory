package shared




type LeaderboardConfigurationScoreOrderEnum string

const (
    LeaderboardConfigurationScoreOrderEnumScoreOrderUnspecified LeaderboardConfigurationScoreOrderEnum = "SCORE_ORDER_UNSPECIFIED"
LeaderboardConfigurationScoreOrderEnumLargerIsBetter LeaderboardConfigurationScoreOrderEnum = "LARGER_IS_BETTER"
LeaderboardConfigurationScoreOrderEnumSmallerIsBetter LeaderboardConfigurationScoreOrderEnum = "SMALLER_IS_BETTER"
)


type LeaderboardConfiguration struct {
    Draft *LeaderboardConfigurationDetail `json:"draft,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Published *LeaderboardConfigurationDetail `json:"published,omitempty"`
    ScoreMax *string `json:"scoreMax,omitempty"`
    ScoreMin *string `json:"scoreMin,omitempty"`
    ScoreOrder *LeaderboardConfigurationScoreOrderEnum `json:"scoreOrder,omitempty"`
    Token *string `json:"token,omitempty"`
    
}

