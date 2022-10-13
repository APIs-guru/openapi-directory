package shared

type StragglerSummary struct {
	StragglerCauseCount map[string]string `json:"stragglerCauseCount"`
	TotalStragglerCount *string           `json:"totalStragglerCount"`
}
