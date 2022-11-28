package shared

// ExecStep
// A step that runs an executable for a PatchJob.
type ExecStep struct {
	LinuxExecStepConfig   *ExecStepConfig `json:"linuxExecStepConfig,omitempty"`
	WindowsExecStepConfig *ExecStepConfig `json:"windowsExecStepConfig,omitempty"`
}
