package shared

type SystemInfo struct {
	CachePath                  *string             `json:"CachePath,omitempty"`
	CanLaunchWebBrowser        *bool               `json:"CanLaunchWebBrowser,omitempty"`
	CanSelfRestart             *bool               `json:"CanSelfRestart,omitempty"`
	CompletedInstallations     []InstallationInfo  `json:"CompletedInstallations,omitempty"`
	EncoderLocation            *FFmpegLocationEnum `json:"EncoderLocation,omitempty"`
	HasPendingRestart          *bool               `json:"HasPendingRestart,omitempty"`
	HasUpdateAvailable         *bool               `json:"HasUpdateAvailable,omitempty"`
	ID                         *string             `json:"Id,omitempty"`
	InternalMetadataPath       *string             `json:"InternalMetadataPath,omitempty"`
	IsShuttingDown             *bool               `json:"IsShuttingDown,omitempty"`
	ItemsByNamePath            *string             `json:"ItemsByNamePath,omitempty"`
	LocalAddress               *string             `json:"LocalAddress,omitempty"`
	LogPath                    *string             `json:"LogPath,omitempty"`
	OperatingSystem            *string             `json:"OperatingSystem,omitempty"`
	OperatingSystemDisplayName *string             `json:"OperatingSystemDisplayName,omitempty"`
	PackageName                *string             `json:"PackageName,omitempty"`
	ProductName                *string             `json:"ProductName,omitempty"`
	ProgramDataPath            *string             `json:"ProgramDataPath,omitempty"`
	ServerName                 *string             `json:"ServerName,omitempty"`
	StartupWizardCompleted     *bool               `json:"StartupWizardCompleted,omitempty"`
	SupportsLibraryMonitor     *bool               `json:"SupportsLibraryMonitor,omitempty"`
	SystemArchitecture         *ArchitectureEnum   `json:"SystemArchitecture,omitempty"`
	TranscodingTempPath        *string             `json:"TranscodingTempPath,omitempty"`
	Version                    *string             `json:"Version,omitempty"`
	WebPath                    *string             `json:"WebPath,omitempty"`
	WebSocketPortNumber        *int32              `json:"WebSocketPortNumber,omitempty"`
}
