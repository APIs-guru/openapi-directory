package shared

import (
	"time"
)

type UserBadgeBadgeExpiry struct {
	ExpirationDate *time.Time `json:"expirationDate"`
	Expires        *bool      `json:"expires"`
}

type UserBadge struct {
	AwardedAt   *time.Time            `json:"awardedAt"`
	BadgeExpiry *UserBadgeBadgeExpiry `json:"badgeExpiry"`
	BadgeURL    *string               `json:"badgeUrl"`
	Criterias   *Criteria             `json:"criterias"`
	Description *string               `json:"description"`
	OfferingID  *string               `json:"offeringId"`
	OpenBadge   *OpenBadgeClass       `json:"openBadge"`
	Title       *string               `json:"title"`
}
