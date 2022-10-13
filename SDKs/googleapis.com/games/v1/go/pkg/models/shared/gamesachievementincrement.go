package shared

type GamesAchievementIncrement struct {
	Kind      *string `json:"kind"`
	RequestID *string `json:"requestId"`
	Steps     *int32  `json:"steps"`
}
