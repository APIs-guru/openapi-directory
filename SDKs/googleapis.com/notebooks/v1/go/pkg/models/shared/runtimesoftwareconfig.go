package shared

type RuntimeSoftwareConfigPostStartupScriptBehaviorEnum string

const (
	RuntimeSoftwareConfigPostStartupScriptBehaviorEnumPostStartupScriptBehaviorUnspecified RuntimeSoftwareConfigPostStartupScriptBehaviorEnum = "POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED"
	RuntimeSoftwareConfigPostStartupScriptBehaviorEnumRunEveryStart                        RuntimeSoftwareConfigPostStartupScriptBehaviorEnum = "RUN_EVERY_START"
	RuntimeSoftwareConfigPostStartupScriptBehaviorEnumDownloadAndRunEveryStart             RuntimeSoftwareConfigPostStartupScriptBehaviorEnum = "DOWNLOAD_AND_RUN_EVERY_START"
)

// RuntimeSoftwareConfigInput
// Specifies the selection and configuration of software inside the runtime. The properties to set on runtime. Properties keys are specified in `key:value` format, for example: * `idle_shutdown: true` * `idle_shutdown_timeout: 180` * `enable_health_monitoring: true`
type RuntimeSoftwareConfigInput struct {
	CustomGpuDriverPath       *string                                             `json:"customGpuDriverPath,omitempty"`
	DisableTerminal           *bool                                               `json:"disableTerminal,omitempty"`
	EnableHealthMonitoring    *bool                                               `json:"enableHealthMonitoring,omitempty"`
	IdleShutdown              *bool                                               `json:"idleShutdown,omitempty"`
	IdleShutdownTimeout       *int32                                              `json:"idleShutdownTimeout,omitempty"`
	InstallGpuDriver          *bool                                               `json:"installGpuDriver,omitempty"`
	Kernels                   []ContainerImage                                    `json:"kernels,omitempty"`
	NotebookUpgradeSchedule   *string                                             `json:"notebookUpgradeSchedule,omitempty"`
	PostStartupScript         *string                                             `json:"postStartupScript,omitempty"`
	PostStartupScriptBehavior *RuntimeSoftwareConfigPostStartupScriptBehaviorEnum `json:"postStartupScriptBehavior,omitempty"`
}

// RuntimeSoftwareConfig
// Specifies the selection and configuration of software inside the runtime. The properties to set on runtime. Properties keys are specified in `key:value` format, for example: * `idle_shutdown: true` * `idle_shutdown_timeout: 180` * `enable_health_monitoring: true`
type RuntimeSoftwareConfig struct {
	CustomGpuDriverPath       *string                                             `json:"customGpuDriverPath,omitempty"`
	DisableTerminal           *bool                                               `json:"disableTerminal,omitempty"`
	EnableHealthMonitoring    *bool                                               `json:"enableHealthMonitoring,omitempty"`
	IdleShutdown              *bool                                               `json:"idleShutdown,omitempty"`
	IdleShutdownTimeout       *int32                                              `json:"idleShutdownTimeout,omitempty"`
	InstallGpuDriver          *bool                                               `json:"installGpuDriver,omitempty"`
	Kernels                   []ContainerImage                                    `json:"kernels,omitempty"`
	NotebookUpgradeSchedule   *string                                             `json:"notebookUpgradeSchedule,omitempty"`
	PostStartupScript         *string                                             `json:"postStartupScript,omitempty"`
	PostStartupScriptBehavior *RuntimeSoftwareConfigPostStartupScriptBehaviorEnum `json:"postStartupScriptBehavior,omitempty"`
	Upgradeable               *bool                                               `json:"upgradeable,omitempty"`
}
