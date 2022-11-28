package shared

type GoogleChromeManagementV1CPUInfoArchitectureEnum string

const (
	GoogleChromeManagementV1CPUInfoArchitectureEnumArchitectureUnspecified GoogleChromeManagementV1CPUInfoArchitectureEnum = "ARCHITECTURE_UNSPECIFIED"
	GoogleChromeManagementV1CPUInfoArchitectureEnumX64                     GoogleChromeManagementV1CPUInfoArchitectureEnum = "X64"
)

// GoogleChromeManagementV1CPUInfo
// CPU specifications for the device * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
type GoogleChromeManagementV1CPUInfo struct {
	Architecture        *GoogleChromeManagementV1CPUInfoArchitectureEnum `json:"architecture,omitempty"`
	KeylockerConfigured *bool                                            `json:"keylockerConfigured,omitempty"`
	KeylockerSupported  *bool                                            `json:"keylockerSupported,omitempty"`
	MaxClockSpeed       *int32                                           `json:"maxClockSpeed,omitempty"`
	Model               *string                                          `json:"model,omitempty"`
}
