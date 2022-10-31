package shared

type DailyVisits struct {
	Date   *string `json:"date,omitempty"`
	Visits *int64  `json:"visits,omitempty"`
}
