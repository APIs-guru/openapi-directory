package shared



type AwardedResponse struct {
    Awarded *bool `json:"awarded,omitempty"`
    BadgeID *string `json:"badgeId,omitempty"`
    BadgeURL *string `json:"badgeUrl,omitempty"`
    
}

