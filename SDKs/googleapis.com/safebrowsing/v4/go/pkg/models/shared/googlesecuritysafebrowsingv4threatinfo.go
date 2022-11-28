package shared

type GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum string

const (
	GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnumPlatformTypeUnspecified GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum = "PLATFORM_TYPE_UNSPECIFIED"
	GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnumWindows                 GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum = "WINDOWS"
	GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnumLinux                   GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum = "LINUX"
	GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnumAndroid                 GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum = "ANDROID"
	GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnumOsx                     GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum = "OSX"
	GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnumIos                     GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum = "IOS"
	GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnumAnyPlatform             GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum = "ANY_PLATFORM"
	GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnumAllPlatforms            GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum = "ALL_PLATFORMS"
	GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnumChrome                  GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum = "CHROME"
)

type GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum string

const (
	GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnumThreatEntryTypeUnspecified GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum = "THREAT_ENTRY_TYPE_UNSPECIFIED"
	GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnumURL                        GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum = "URL"
	GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnumExecutable                 GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum = "EXECUTABLE"
	GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnumIPRange                    GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum = "IP_RANGE"
	GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnumChromeExtension            GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum = "CHROME_EXTENSION"
	GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnumFilename                   GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum = "FILENAME"
	GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnumCert                       GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum = "CERT"
)

type GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum string

const (
	GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnumThreatTypeUnspecified           GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum = "THREAT_TYPE_UNSPECIFIED"
	GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnumMalware                         GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum = "MALWARE"
	GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnumSocialEngineering               GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum = "SOCIAL_ENGINEERING"
	GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnumUnwantedSoftware                GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum = "UNWANTED_SOFTWARE"
	GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnumPotentiallyHarmfulApplication   GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum = "POTENTIALLY_HARMFUL_APPLICATION"
	GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnumSocialEngineeringInternal       GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum = "SOCIAL_ENGINEERING_INTERNAL"
	GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnumAPIAbuse                        GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum = "API_ABUSE"
	GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnumMaliciousBinary                 GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum = "MALICIOUS_BINARY"
	GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnumCsdWhitelist                    GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum = "CSD_WHITELIST"
	GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnumCsdDownloadWhitelist            GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum = "CSD_DOWNLOAD_WHITELIST"
	GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnumClientIncident                  GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum = "CLIENT_INCIDENT"
	GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnumClientIncidentWhitelist         GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum = "CLIENT_INCIDENT_WHITELIST"
	GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnumApkMalwareOffline               GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum = "APK_MALWARE_OFFLINE"
	GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnumSubresourceFilter               GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum = "SUBRESOURCE_FILTER"
	GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnumSuspicious                      GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum = "SUSPICIOUS"
	GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnumTrickToBill                     GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum = "TRICK_TO_BILL"
	GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnumHighConfidenceAllowlist         GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum = "HIGH_CONFIDENCE_ALLOWLIST"
	GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnumAccuracyTips                    GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum = "ACCURACY_TIPS"
	GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnumSocialEngineeringLowerPrecision GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum = "SOCIAL_ENGINEERING_LOWER_PRECISION"
)

// GoogleSecuritySafebrowsingV4ThreatInfo
// The information regarding one or more threats that a client submits when checking for matches in threat lists.
type GoogleSecuritySafebrowsingV4ThreatInfo struct {
	PlatformTypes    []GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum    `json:"platformTypes,omitempty"`
	ThreatEntries    []GoogleSecuritySafebrowsingV4ThreatEntry                    `json:"threatEntries,omitempty"`
	ThreatEntryTypes []GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum `json:"threatEntryTypes,omitempty"`
	ThreatTypes      []GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum      `json:"threatTypes,omitempty"`
}
