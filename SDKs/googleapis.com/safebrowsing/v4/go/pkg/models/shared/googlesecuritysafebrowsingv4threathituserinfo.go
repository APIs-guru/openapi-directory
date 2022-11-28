package shared

// GoogleSecuritySafebrowsingV4ThreatHitUserInfo
// Details about the user that encountered the threat.
type GoogleSecuritySafebrowsingV4ThreatHitUserInfo struct {
	RegionCode *string `json:"regionCode,omitempty"`
	UserID     *string `json:"userId,omitempty"`
}
