package shared

type StatsResponse struct {
	AvgSessionLengthMinutes *float32 `json:"avg_session_length_minutes,omitempty"`
	ChurnProbability        *float32 `json:"churn_probability,omitempty"`
	DaysSinceLastPlayed     *int32   `json:"days_since_last_played,omitempty"`
	HighSpenderProbability  *float32 `json:"high_spender_probability,omitempty"`
	Kind                    *string  `json:"kind,omitempty"`
	NumPurchases            *int32   `json:"num_purchases,omitempty"`
	NumSessions             *int32   `json:"num_sessions,omitempty"`
	NumSessionsPercentile   *float32 `json:"num_sessions_percentile,omitempty"`
	SpendPercentile         *float32 `json:"spend_percentile,omitempty"`
	SpendProbability        *float32 `json:"spend_probability,omitempty"`
	TotalSpendNext28Days    *float32 `json:"total_spend_next_28_days,omitempty"`
}
