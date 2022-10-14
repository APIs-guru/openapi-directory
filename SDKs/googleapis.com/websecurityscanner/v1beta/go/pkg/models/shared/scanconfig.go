package shared

type ScanConfigExportToSecurityCommandCenterEnum string

const (
	ScanConfigExportToSecurityCommandCenterEnumExportToSecurityCommandCenterUnspecified ScanConfigExportToSecurityCommandCenterEnum = "EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED"
	ScanConfigExportToSecurityCommandCenterEnumEnabled                                  ScanConfigExportToSecurityCommandCenterEnum = "ENABLED"
	ScanConfigExportToSecurityCommandCenterEnumDisabled                                 ScanConfigExportToSecurityCommandCenterEnum = "DISABLED"
)

type ScanConfigRiskLevelEnum string

const (
	ScanConfigRiskLevelEnumRiskLevelUnspecified ScanConfigRiskLevelEnum = "RISK_LEVEL_UNSPECIFIED"
	ScanConfigRiskLevelEnumNormal               ScanConfigRiskLevelEnum = "NORMAL"
	ScanConfigRiskLevelEnumLow                  ScanConfigRiskLevelEnum = "LOW"
)

type ScanConfigTargetPlatformsEnum string

const (
	ScanConfigTargetPlatformsEnumTargetPlatformUnspecified ScanConfigTargetPlatformsEnum = "TARGET_PLATFORM_UNSPECIFIED"
	ScanConfigTargetPlatformsEnumAppEngine                 ScanConfigTargetPlatformsEnum = "APP_ENGINE"
	ScanConfigTargetPlatformsEnumCompute                   ScanConfigTargetPlatformsEnum = "COMPUTE"
	ScanConfigTargetPlatformsEnumCloudRun                  ScanConfigTargetPlatformsEnum = "CLOUD_RUN"
	ScanConfigTargetPlatformsEnumCloudFunctions            ScanConfigTargetPlatformsEnum = "CLOUD_FUNCTIONS"
)

type ScanConfigUserAgentEnum string

const (
	ScanConfigUserAgentEnumUserAgentUnspecified ScanConfigUserAgentEnum = "USER_AGENT_UNSPECIFIED"
	ScanConfigUserAgentEnumChromeLinux          ScanConfigUserAgentEnum = "CHROME_LINUX"
	ScanConfigUserAgentEnumChromeAndroid        ScanConfigUserAgentEnum = "CHROME_ANDROID"
	ScanConfigUserAgentEnumSafariIphone         ScanConfigUserAgentEnum = "SAFARI_IPHONE"
)

type ScanConfig struct {
	Authentication                *Authentication                              `json:"authentication,omitempty"`
	BlacklistPatterns             []string                                     `json:"blacklistPatterns,omitempty"`
	DisplayName                   *string                                      `json:"displayName,omitempty"`
	ExportToSecurityCommandCenter *ScanConfigExportToSecurityCommandCenterEnum `json:"exportToSecurityCommandCenter,omitempty"`
	IgnoreHTTPStatusErrors        *bool                                        `json:"ignoreHttpStatusErrors,omitempty"`
	LatestRun                     *ScanRun                                     `json:"latestRun,omitempty"`
	ManagedScan                   *bool                                        `json:"managedScan,omitempty"`
	MaxQPS                        *int32                                       `json:"maxQps,omitempty"`
	Name                          *string                                      `json:"name,omitempty"`
	RiskLevel                     *ScanConfigRiskLevelEnum                     `json:"riskLevel,omitempty"`
	Schedule                      *Schedule                                    `json:"schedule,omitempty"`
	StartingUrls                  []string                                     `json:"startingUrls,omitempty"`
	StaticIPScan                  *bool                                        `json:"staticIpScan,omitempty"`
	TargetPlatforms               []ScanConfigTargetPlatformsEnum              `json:"targetPlatforms,omitempty"`
	UserAgent                     *ScanConfigUserAgentEnum                     `json:"userAgent,omitempty"`
}
