package shared

type GoogleChromeManagementV1CPUInfoArchitectureEnum string

const (
	GoogleChromeManagementV1CPUInfoArchitectureEnumArchitectureUnspecified GoogleChromeManagementV1CPUInfoArchitectureEnum = "ARCHITECTURE_UNSPECIFIED"
	GoogleChromeManagementV1CPUInfoArchitectureEnumX64                     GoogleChromeManagementV1CPUInfoArchitectureEnum = "X64"
)

type GoogleChromeManagementV1CPUInfo struct {
	Architecture        *GoogleChromeManagementV1CPUInfoArchitectureEnum `json:"architecture"`
	KeylockerConfigured *bool                                            `json:"keylockerConfigured"`
	KeylockerSupported  *bool                                            `json:"keylockerSupported"`
	MaxClockSpeed       *int32                                           `json:"maxClockSpeed"`
	Model               *string                                          `json:"model"`
}
