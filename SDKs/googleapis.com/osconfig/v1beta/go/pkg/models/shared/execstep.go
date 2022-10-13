package shared

type ExecStep struct {
	LinuxExecStepConfig   *ExecStepConfig `json:"linuxExecStepConfig"`
	WindowsExecStepConfig *ExecStepConfig `json:"windowsExecStepConfig"`
}
