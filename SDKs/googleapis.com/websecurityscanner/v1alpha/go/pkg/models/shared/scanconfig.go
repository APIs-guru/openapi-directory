package shared

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
	Authentication    *Authentication                 `json:"authentication"`
	BlacklistPatterns []string                        `json:"blacklistPatterns"`
	DisplayName       *string                         `json:"displayName"`
	LatestRun         *ScanRun                        `json:"latestRun"`
	MaxQPS            *int32                          `json:"maxQps"`
	Name              *string                         `json:"name"`
	Schedule          *Schedule                       `json:"schedule"`
	StartingUrls      []string                        `json:"startingUrls"`
	TargetPlatforms   []ScanConfigTargetPlatformsEnum `json:"targetPlatforms"`
	UserAgent         *ScanConfigUserAgentEnum        `json:"userAgent"`
}
