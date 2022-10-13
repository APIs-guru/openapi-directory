package shared

type StatsResponse struct {
	AvgSessionLengthMinutes *float32 `json:"avg_session_length_minutes"`
	ChurnProbability        *float32 `json:"churn_probability"`
	DaysSinceLastPlayed     *int32   `json:"days_since_last_played"`
	HighSpenderProbability  *float32 `json:"high_spender_probability"`
	Kind                    *string  `json:"kind"`
	NumPurchases            *int32   `json:"num_purchases"`
	NumSessions             *int32   `json:"num_sessions"`
	NumSessionsPercentile   *float32 `json:"num_sessions_percentile"`
	SpendPercentile         *float32 `json:"spend_percentile"`
	SpendProbability        *float32 `json:"spend_probability"`
	TotalSpendNext28Days    *float32 `json:"total_spend_next_28_days"`
}
