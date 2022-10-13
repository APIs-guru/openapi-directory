package shared

type Process struct {
	Args                  []string              `json:"args"`
	ArgumentsTruncated    *bool                 `json:"argumentsTruncated"`
	Binary                *File                 `json:"binary"`
	EnvVariables          []EnvironmentVariable `json:"envVariables"`
	EnvVariablesTruncated *bool                 `json:"envVariablesTruncated"`
	Libraries             []File                `json:"libraries"`
	Name                  *string               `json:"name"`
	ParentPid             *string               `json:"parentPid"`
	Pid                   *string               `json:"pid"`
	Script                *File                 `json:"script"`
}
