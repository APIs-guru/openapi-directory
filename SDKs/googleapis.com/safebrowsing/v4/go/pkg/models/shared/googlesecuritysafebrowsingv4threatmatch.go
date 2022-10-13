package shared

type GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnum string

const (
	GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnumPlatformTypeUnspecified GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnum = "PLATFORM_TYPE_UNSPECIFIED"
	GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnumWindows                 GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnum = "WINDOWS"
	GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnumLinux                   GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnum = "LINUX"
	GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnumAndroid                 GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnum = "ANDROID"
	GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnumOsx                     GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnum = "OSX"
	GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnumIos                     GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnum = "IOS"
	GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnumAnyPlatform             GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnum = "ANY_PLATFORM"
	GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnumAllPlatforms            GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnum = "ALL_PLATFORMS"
	GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnumChrome                  GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnum = "CHROME"
)

type GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnum string

const (
	GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnumThreatEntryTypeUnspecified GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnum = "THREAT_ENTRY_TYPE_UNSPECIFIED"
	GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnumURL                        GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnum = "URL"
	GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnumExecutable                 GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnum = "EXECUTABLE"
	GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnumIPRange                    GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnum = "IP_RANGE"
	GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnumChromeExtension            GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnum = "CHROME_EXTENSION"
	GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnumFilename                   GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnum = "FILENAME"
	GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnumCert                       GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnum = "CERT"
)

type GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum string

const (
	GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnumThreatTypeUnspecified           GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum = "THREAT_TYPE_UNSPECIFIED"
	GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnumMalware                         GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum = "MALWARE"
	GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnumSocialEngineering               GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum = "SOCIAL_ENGINEERING"
	GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnumUnwantedSoftware                GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum = "UNWANTED_SOFTWARE"
	GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnumPotentiallyHarmfulApplication   GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum = "POTENTIALLY_HARMFUL_APPLICATION"
	GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnumSocialEngineeringInternal       GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum = "SOCIAL_ENGINEERING_INTERNAL"
	GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnumAPIAbuse                        GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum = "API_ABUSE"
	GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnumMaliciousBinary                 GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum = "MALICIOUS_BINARY"
	GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnumCsdWhitelist                    GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum = "CSD_WHITELIST"
	GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnumCsdDownloadWhitelist            GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum = "CSD_DOWNLOAD_WHITELIST"
	GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnumClientIncident                  GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum = "CLIENT_INCIDENT"
	GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnumClientIncidentWhitelist         GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum = "CLIENT_INCIDENT_WHITELIST"
	GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnumApkMalwareOffline               GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum = "APK_MALWARE_OFFLINE"
	GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnumSubresourceFilter               GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum = "SUBRESOURCE_FILTER"
	GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnumSuspicious                      GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum = "SUSPICIOUS"
	GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnumTrickToBill                     GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum = "TRICK_TO_BILL"
	GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnumHighConfidenceAllowlist         GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum = "HIGH_CONFIDENCE_ALLOWLIST"
	GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnumAccuracyTips                    GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum = "ACCURACY_TIPS"
	GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnumSocialEngineeringLowerPrecision GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum = "SOCIAL_ENGINEERING_LOWER_PRECISION"
)

type GoogleSecuritySafebrowsingV4ThreatMatch struct {
	CacheDuration       *string                                                     `json:"cacheDuration"`
	PlatformType        *GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnum    `json:"platformType"`
	Threat              *GoogleSecuritySafebrowsingV4ThreatEntry                    `json:"threat"`
	ThreatEntryMetadata *GoogleSecuritySafebrowsingV4ThreatEntryMetadata            `json:"threatEntryMetadata"`
	ThreatEntryType     *GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnum `json:"threatEntryType"`
	ThreatType          *GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum      `json:"threatType"`
}
