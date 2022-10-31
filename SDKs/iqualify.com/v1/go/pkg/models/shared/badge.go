package shared

type Badge struct {
	BadgeExpiry *BadgeExpiry    `json:"badgeExpiry,omitempty"`
	BadgeURL    *string         `json:"badgeUrl,omitempty"`
	Criterias   *Criteria       `json:"criterias,omitempty"`
	Description *string         `json:"description,omitempty"`
	OpenBadge   *OpenBadgeClass `json:"openBadge,omitempty"`
	Title       *string         `json:"title,omitempty"`
}
