package shared

type Container struct {
	Args                     []string              `json:"args"`
	Command                  []string              `json:"command"`
	Env                      []EnvVar              `json:"env"`
	EnvFrom                  []EnvFromSource       `json:"envFrom"`
	Image                    *string               `json:"image"`
	ImagePullPolicy          *string               `json:"imagePullPolicy"`
	LivenessProbe            *Probe                `json:"livenessProbe"`
	Name                     *string               `json:"name"`
	Ports                    []ContainerPort       `json:"ports"`
	ReadinessProbe           *Probe                `json:"readinessProbe"`
	Resources                *ResourceRequirements `json:"resources"`
	SecurityContext          *SecurityContext      `json:"securityContext"`
	StartupProbe             *Probe                `json:"startupProbe"`
	TerminationMessagePath   *string               `json:"terminationMessagePath"`
	TerminationMessagePolicy *string               `json:"terminationMessagePolicy"`
	VolumeMounts             []VolumeMount         `json:"volumeMounts"`
	WorkingDir               *string               `json:"workingDir"`
}
