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
	DockerImage *string               `json:"dockerImage"`
	ID          *string               `json:"id"`
	Name        *string               `json:"name"`
	PublicKeys  []string              `json:"publicKeys"`
	SSHHost     *string               `json:"sshHost"`
	SSHPort     *int32                `json:"sshPort"`
	SSHUsername *string               `json:"sshUsername"`
	State       *EnvironmentStateEnum `json:"state"`
	WebHost     *string               `json:"webHost"`
}
