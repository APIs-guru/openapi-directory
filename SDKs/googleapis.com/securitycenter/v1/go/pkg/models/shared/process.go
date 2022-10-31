package shared



type Process struct {
    Args []string `json:"args,omitempty"`
    ArgumentsTruncated *bool `json:"argumentsTruncated,omitempty"`
    Binary *File `json:"binary,omitempty"`
    EnvVariables []EnvironmentVariable `json:"envVariables,omitempty"`
    EnvVariablesTruncated *bool `json:"envVariablesTruncated,omitempty"`
    Libraries []File `json:"libraries,omitempty"`
    Name *string `json:"name,omitempty"`
    ParentPid *string `json:"parentPid,omitempty"`
    Pid *string `json:"pid,omitempty"`
    Script *File `json:"script,omitempty"`
    
}

