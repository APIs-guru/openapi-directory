package shared

type Badge struct {
	BadgeExpiry *BadgeExpiry    `json:"badgeExpiry"`
	BadgeURL    *string         `json:"badgeUrl"`
	Criterias   *Criteria       `json:"criterias"`
	Description *string         `json:"description"`
	OpenBadge   *OpenBadgeClass `json:"openBadge"`
	Title       *string         `json:"title"`
}
