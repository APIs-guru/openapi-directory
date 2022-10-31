package shared

import (
"time")

type UserBadgeBadgeExpiry struct {
    ExpirationDate *time.Time `json:"expirationDate,omitempty"`
    Expires *bool `json:"expires,omitempty"`
    
}

type UserBadge struct {
    AwardedAt *time.Time `json:"awardedAt,omitempty"`
    BadgeExpiry *UserBadgeBadgeExpiry `json:"badgeExpiry,omitempty"`
    BadgeURL *string `json:"badgeUrl,omitempty"`
    Criterias *Criteria `json:"criterias,omitempty"`
    Description *string `json:"description,omitempty"`
    OfferingID *string `json:"offeringId,omitempty"`
    OpenBadge *OpenBadgeClass `json:"openBadge,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

