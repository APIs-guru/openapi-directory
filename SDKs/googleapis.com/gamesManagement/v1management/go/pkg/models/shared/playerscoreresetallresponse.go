package shared

type PlayerScoreResetAllResponse struct {
	Kind    *string                    `json:"kind"`
	Results []PlayerScoreResetResponse `json:"results"`
}
