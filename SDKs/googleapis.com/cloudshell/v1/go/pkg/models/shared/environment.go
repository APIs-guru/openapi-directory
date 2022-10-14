package shared

type EnvironmentStateEnum string

const (
	EnvironmentStateEnumStateUnspecified EnvironmentStateEnum = "STATE_UNSPECIFIED"
	EnvironmentStateEnumSuspended        EnvironmentStateEnum = "SUSPENDED"
	EnvironmentStateEnumPending          EnvironmentStateEnum = "PENDING"
	EnvironmentStateEnumRunning          EnvironmentStateEnum = "RUNNING"
	EnvironmentStateEnumDeleting         EnvironmentStateEnum = "DELETING"
)

type Environment struct {
	DockerImage *string               `json:"dockerImage,omitempty"`
	ID          *string               `json:"id,omitempty"`
	Name        *string               `json:"name,omitempty"`
	PublicKeys  []string              `json:"publicKeys,omitempty"`
	SSHHost     *string               `json:"sshHost,omitempty"`
	SSHPort     *int32                `json:"sshPort,omitempty"`
	SSHUsername *string               `json:"sshUsername,omitempty"`
	State       *EnvironmentStateEnum `json:"state,omitempty"`
	WebHost     *string               `json:"webHost,omitempty"`
}
