package shared

type SystemInfo struct {
	CachePath                  *string             `json:"CachePath"`
	CanLaunchWebBrowser        *bool               `json:"CanLaunchWebBrowser"`
	CanSelfRestart             *bool               `json:"CanSelfRestart"`
	CompletedInstallations     []InstallationInfo  `json:"CompletedInstallations"`
	EncoderLocation            *FFmpegLocationEnum `json:"EncoderLocation"`
	HasPendingRestart          *bool               `json:"HasPendingRestart"`
	HasUpdateAvailable         *bool               `json:"HasUpdateAvailable"`
	ID                         *string             `json:"Id"`
	InternalMetadataPath       *string             `json:"InternalMetadataPath"`
	IsShuttingDown             *bool               `json:"IsShuttingDown"`
	ItemsByNamePath            *string             `json:"ItemsByNamePath"`
	LocalAddress               *string             `json:"LocalAddress"`
	LogPath                    *string             `json:"LogPath"`
	OperatingSystem            *string             `json:"OperatingSystem"`
	OperatingSystemDisplayName *string             `json:"OperatingSystemDisplayName"`
	PackageName                *string             `json:"PackageName"`
	ProductName                *string             `json:"ProductName"`
	ProgramDataPath            *string             `json:"ProgramDataPath"`
	ServerName                 *string             `json:"ServerName"`
	StartupWizardCompleted     *bool               `json:"StartupWizardCompleted"`
	SupportsLibraryMonitor     *bool               `json:"SupportsLibraryMonitor"`
	SystemArchitecture         *ArchitectureEnum   `json:"SystemArchitecture"`
	TranscodingTempPath        *string             `json:"TranscodingTempPath"`
	Version                    *string             `json:"Version"`
	WebPath                    *string             `json:"WebPath"`
	WebSocketPortNumber        *int32              `json:"WebSocketPortNumber"`
}
