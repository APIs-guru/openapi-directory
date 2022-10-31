package shared




type GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum string

const (
    GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnumThreatSourceTypeUnspecified GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum = "THREAT_SOURCE_TYPE_UNSPECIFIED"
GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnumMatchingURL GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum = "MATCHING_URL"
GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnumTabURL GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum = "TAB_URL"
GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnumTabRedirect GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum = "TAB_REDIRECT"
GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnumTabResource GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum = "TAB_RESOURCE"
)


type GoogleSecuritySafebrowsingV4ThreatHitThreatSource struct {
    Referrer *string `json:"referrer,omitempty"`
    RemoteIP *string `json:"remoteIp,omitempty"`
    Type *GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum `json:"type,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

