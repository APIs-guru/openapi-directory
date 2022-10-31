package shared

type PlayerScoreResetAllResponse struct {
	Kind    *string                    `json:"kind,omitempty"`
	Results []PlayerScoreResetResponse `json:"results,omitempty"`
}
