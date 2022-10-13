package shared

type GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum string

const (
	GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnumPlatformTypeUnspecified GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum = "PLATFORM_TYPE_UNSPECIFIED"
	GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnumWindows                 GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum = "WINDOWS"
	GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnumLinux                   GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum = "LINUX"
	GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnumAndroid                 GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum = "ANDROID"
	GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnumOsx                     GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum = "OSX"
	GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnumIos                     GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum = "IOS"
	GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnumAnyPlatform             GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum = "ANY_PLATFORM"
	GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnumAllPlatforms            GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum = "ALL_PLATFORMS"
	GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnumChrome                  GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum = "CHROME"
)

type GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum string

const (
	GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnumThreatTypeUnspecified           GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum = "THREAT_TYPE_UNSPECIFIED"
	GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnumMalware                         GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum = "MALWARE"
	GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnumSocialEngineering               GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum = "SOCIAL_ENGINEERING"
	GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnumUnwantedSoftware                GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum = "UNWANTED_SOFTWARE"
	GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnumPotentiallyHarmfulApplication   GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum = "POTENTIALLY_HARMFUL_APPLICATION"
	GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnumSocialEngineeringInternal       GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum = "SOCIAL_ENGINEERING_INTERNAL"
	GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnumAPIAbuse                        GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum = "API_ABUSE"
	GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnumMaliciousBinary                 GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum = "MALICIOUS_BINARY"
	GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnumCsdWhitelist                    GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum = "CSD_WHITELIST"
	GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnumCsdDownloadWhitelist            GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum = "CSD_DOWNLOAD_WHITELIST"
	GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnumClientIncident                  GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum = "CLIENT_INCIDENT"
	GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnumClientIncidentWhitelist         GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum = "CLIENT_INCIDENT_WHITELIST"
	GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnumApkMalwareOffline               GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum = "APK_MALWARE_OFFLINE"
	GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnumSubresourceFilter               GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum = "SUBRESOURCE_FILTER"
	GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnumSuspicious                      GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum = "SUSPICIOUS"
	GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnumTrickToBill                     GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum = "TRICK_TO_BILL"
	GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnumHighConfidenceAllowlist         GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum = "HIGH_CONFIDENCE_ALLOWLIST"
	GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnumAccuracyTips                    GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum = "ACCURACY_TIPS"
	GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnumSocialEngineeringLowerPrecision GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum = "SOCIAL_ENGINEERING_LOWER_PRECISION"
)

type GoogleSecuritySafebrowsingV4ThreatHit struct {
	ClientInfo   *GoogleSecuritySafebrowsingV4ClientInfo                `json:"clientInfo"`
	Entry        *GoogleSecuritySafebrowsingV4ThreatEntry               `json:"entry"`
	PlatformType *GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum `json:"platformType"`
	Resources    []GoogleSecuritySafebrowsingV4ThreatHitThreatSource    `json:"resources"`
	ThreatType   *GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum   `json:"threatType"`
	UserInfo     *GoogleSecuritySafebrowsingV4ThreatHitUserInfo         `json:"userInfo"`
}
