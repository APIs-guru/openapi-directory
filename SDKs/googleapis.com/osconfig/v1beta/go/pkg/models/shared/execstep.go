package shared



type ExecStep struct {
    LinuxExecStepConfig *ExecStepConfig `json:"linuxExecStepConfig,omitempty"`
    WindowsExecStepConfig *ExecStepConfig `json:"windowsExecStepConfig,omitempty"`
    
}

