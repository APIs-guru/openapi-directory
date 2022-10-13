package shared

type AwardedResponse struct {
	Awarded  *bool   `json:"awarded"`
	BadgeID  *string `json:"badgeId"`
	BadgeURL *string `json:"badgeUrl"`
}
