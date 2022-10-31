package shared




type GoogleChromeManagementV1CPUInfoArchitectureEnum string

const (
    GoogleChromeManagementV1CPUInfoArchitectureEnumArchitectureUnspecified GoogleChromeManagementV1CPUInfoArchitectureEnum = "ARCHITECTURE_UNSPECIFIED"
GoogleChromeManagementV1CPUInfoArchitectureEnumX64 GoogleChromeManagementV1CPUInfoArchitectureEnum = "X64"
)


type GoogleChromeManagementV1CPUInfo struct {
    Architecture *GoogleChromeManagementV1CPUInfoArchitectureEnum `json:"architecture,omitempty"`
    KeylockerConfigured *bool `json:"keylockerConfigured,omitempty"`
    KeylockerSupported *bool `json:"keylockerSupported,omitempty"`
    MaxClockSpeed *int32 `json:"maxClockSpeed,omitempty"`
    Model *string `json:"model,omitempty"`
    
}

