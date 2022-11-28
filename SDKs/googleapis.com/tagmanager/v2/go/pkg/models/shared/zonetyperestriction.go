package shared

// ZoneTypeRestriction
// Represents a Zone's type restrictions.
type ZoneTypeRestriction struct {
	Enable            *bool    `json:"enable,omitempty"`
	WhitelistedTypeID []string `json:"whitelistedTypeId,omitempty"`
}
