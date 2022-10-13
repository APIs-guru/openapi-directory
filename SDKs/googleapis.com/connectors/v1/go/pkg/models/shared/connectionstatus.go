package shared

type ConnectionStatusStateEnum string

const (
	ConnectionStatusStateEnumStateUnspecified ConnectionStatusStateEnum = "STATE_UNSPECIFIED"
	ConnectionStatusStateEnumCreating         ConnectionStatusStateEnum = "CREATING"
	ConnectionStatusStateEnumActive           ConnectionStatusStateEnum = "ACTIVE"
	ConnectionStatusStateEnumInactive         ConnectionStatusStateEnum = "INACTIVE"
	ConnectionStatusStateEnumDeleting         ConnectionStatusStateEnum = "DELETING"
	ConnectionStatusStateEnumUpdating         ConnectionStatusStateEnum = "UPDATING"
	ConnectionStatusStateEnumError            ConnectionStatusStateEnum = "ERROR"
)

type ConnectionStatus struct {
	Description *string                    `json:"description"`
	State       *ConnectionStatusStateEnum `json:"state"`
	Status      *string                    `json:"status"`
}
