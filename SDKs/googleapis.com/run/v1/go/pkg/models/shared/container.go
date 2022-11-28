package shared

// Container
// A single application container. This specifies both the container to run, the command to run in the container and the arguments to supply to it. Note that additional arguments may be supplied by the system to the container at runtime.
type Container struct {
	Args                     []string              `json:"args,omitempty"`
	Command                  []string              `json:"command,omitempty"`
	Env                      []EnvVar              `json:"env,omitempty"`
	EnvFrom                  []EnvFromSource       `json:"envFrom,omitempty"`
	Image                    *string               `json:"image,omitempty"`
	ImagePullPolicy          *string               `json:"imagePullPolicy,omitempty"`
	LivenessProbe            *Probe                `json:"livenessProbe,omitempty"`
	Name                     *string               `json:"name,omitempty"`
	Ports                    []ContainerPort       `json:"ports,omitempty"`
	ReadinessProbe           *Probe                `json:"readinessProbe,omitempty"`
	Resources                *ResourceRequirements `json:"resources,omitempty"`
	SecurityContext          *SecurityContext      `json:"securityContext,omitempty"`
	StartupProbe             *Probe                `json:"startupProbe,omitempty"`
	TerminationMessagePath   *string               `json:"terminationMessagePath,omitempty"`
	TerminationMessagePolicy *string               `json:"terminationMessagePolicy,omitempty"`
	VolumeMounts             []VolumeMount         `json:"volumeMounts,omitempty"`
	WorkingDir               *string               `json:"workingDir,omitempty"`
}
