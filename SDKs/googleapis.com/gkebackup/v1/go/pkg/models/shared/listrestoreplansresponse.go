package shared

type ListRestorePlansResponse struct {
	NextPageToken *string       `json:"nextPageToken"`
	RestorePlans  []RestorePlan `json:"restorePlans"`
	Unreachable   []string      `json:"unreachable"`
}
