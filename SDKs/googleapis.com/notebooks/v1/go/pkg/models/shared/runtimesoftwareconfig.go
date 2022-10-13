package shared

type RuntimeSoftwareConfigPostStartupScriptBehaviorEnum string

const (
	RuntimeSoftwareConfigPostStartupScriptBehaviorEnumPostStartupScriptBehaviorUnspecified RuntimeSoftwareConfigPostStartupScriptBehaviorEnum = "POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED"
	RuntimeSoftwareConfigPostStartupScriptBehaviorEnumRunEveryStart                        RuntimeSoftwareConfigPostStartupScriptBehaviorEnum = "RUN_EVERY_START"
	RuntimeSoftwareConfigPostStartupScriptBehaviorEnumDownloadAndRunEveryStart             RuntimeSoftwareConfigPostStartupScriptBehaviorEnum = "DOWNLOAD_AND_RUN_EVERY_START"
)

type RuntimeSoftwareConfig struct {
	CustomGpuDriverPath       *string                                             `json:"customGpuDriverPath"`
	DisableTerminal           *bool                                               `json:"disableTerminal"`
	EnableHealthMonitoring    *bool                                               `json:"enableHealthMonitoring"`
	IdleShutdown              *bool                                               `json:"idleShutdown"`
	IdleShutdownTimeout       *int32                                              `json:"idleShutdownTimeout"`
	InstallGpuDriver          *bool                                               `json:"installGpuDriver"`
	Kernels                   []ContainerImage                                    `json:"kernels"`
	NotebookUpgradeSchedule   *string                                             `json:"notebookUpgradeSchedule"`
	PostStartupScript         *string                                             `json:"postStartupScript"`
	PostStartupScriptBehavior *RuntimeSoftwareConfigPostStartupScriptBehaviorEnum `json:"postStartupScriptBehavior"`
	Upgradeable               *bool                                               `json:"upgradeable"`
}
