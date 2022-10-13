package shared

type AddGoogleAnalyticsRequest struct {
	AnalyticsAccountID  *string `json:"analyticsAccountId"`
	AnalyticsPropertyID *string `json:"analyticsPropertyId"`
}
