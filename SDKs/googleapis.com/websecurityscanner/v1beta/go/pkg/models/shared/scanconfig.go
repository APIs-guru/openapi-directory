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
	Authentication                *Authentication                              `json:"authentication"`
	BlacklistPatterns             []string                                     `json:"blacklistPatterns"`
	DisplayName                   *string                                      `json:"displayName"`
	ExportToSecurityCommandCenter *ScanConfigExportToSecurityCommandCenterEnum `json:"exportToSecurityCommandCenter"`
	IgnoreHTTPStatusErrors        *bool                                        `json:"ignoreHttpStatusErrors"`
	LatestRun                     *ScanRun                                     `json:"latestRun"`
	ManagedScan                   *bool                                        `json:"managedScan"`
	MaxQPS                        *int32                                       `json:"maxQps"`
	Name                          *string                                      `json:"name"`
	RiskLevel                     *ScanConfigRiskLevelEnum                     `json:"riskLevel"`
	Schedule                      *Schedule                                    `json:"schedule"`
	StartingUrls                  []string                                     `json:"startingUrls"`
	StaticIPScan                  *bool                                        `json:"staticIpScan"`
	TargetPlatforms               []ScanConfigTargetPlatformsEnum              `json:"targetPlatforms"`
	UserAgent                     *ScanConfigUserAgentEnum                     `json:"userAgent"`
}
