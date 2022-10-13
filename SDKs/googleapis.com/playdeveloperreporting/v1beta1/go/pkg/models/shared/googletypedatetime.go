package shared

type GoogleTypeDateTime struct {
	Day       *int32              `json:"day"`
	Hours     *int32              `json:"hours"`
	Minutes   *int32              `json:"minutes"`
	Month     *int32              `json:"month"`
	Nanos     *int32              `json:"nanos"`
	Seconds   *int32              `json:"seconds"`
	TimeZone  *GoogleTypeTimeZone `json:"timeZone"`
	UtcOffset *string             `json:"utcOffset"`
	Year      *int32              `json:"year"`
}
