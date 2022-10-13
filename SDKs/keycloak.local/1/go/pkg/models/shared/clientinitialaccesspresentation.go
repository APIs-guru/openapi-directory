package shared

type ClientInitialAccessPresentation struct {
	Count          *int32  `json:"count"`
	Expiration     *int32  `json:"expiration"`
	ID             *string `json:"id"`
	RemainingCount *int32  `json:"remainingCount"`
	Timestamp      *int32  `json:"timestamp"`
	Token          *string `json:"token"`
}
