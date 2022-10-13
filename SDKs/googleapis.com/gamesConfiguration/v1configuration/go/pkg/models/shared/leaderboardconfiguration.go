package shared

type LeaderboardConfigurationScoreOrderEnum string

const (
	LeaderboardConfigurationScoreOrderEnumScoreOrderUnspecified LeaderboardConfigurationScoreOrderEnum = "SCORE_ORDER_UNSPECIFIED"
	LeaderboardConfigurationScoreOrderEnumLargerIsBetter        LeaderboardConfigurationScoreOrderEnum = "LARGER_IS_BETTER"
	LeaderboardConfigurationScoreOrderEnumSmallerIsBetter       LeaderboardConfigurationScoreOrderEnum = "SMALLER_IS_BETTER"
)

type LeaderboardConfiguration struct {
	Draft      *LeaderboardConfigurationDetail         `json:"draft"`
	ID         *string                                 `json:"id"`
	Kind       *string                                 `json:"kind"`
	Published  *LeaderboardConfigurationDetail         `json:"published"`
	ScoreMax   *string                                 `json:"scoreMax"`
	ScoreMin   *string                                 `json:"scoreMin"`
	ScoreOrder *LeaderboardConfigurationScoreOrderEnum `json:"scoreOrder"`
	Token      *string                                 `json:"token"`
}
