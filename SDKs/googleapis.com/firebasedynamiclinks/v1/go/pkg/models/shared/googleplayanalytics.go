package shared

type GooglePlayAnalytics struct {
	Gclid       *string `json:"gclid"`
	UtmCampaign *string `json:"utmCampaign"`
	UtmContent  *string `json:"utmContent"`
	UtmMedium   *string `json:"utmMedium"`
	UtmSource   *string `json:"utmSource"`
	UtmTerm     *string `json:"utmTerm"`
}
