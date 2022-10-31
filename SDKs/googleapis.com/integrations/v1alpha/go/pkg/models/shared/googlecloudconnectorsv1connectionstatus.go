package shared

type GoogleCloudConnectorsV1ConnectionStatusStateEnum string

const (
	GoogleCloudConnectorsV1ConnectionStatusStateEnumStateUnspecified GoogleCloudConnectorsV1ConnectionStatusStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudConnectorsV1ConnectionStatusStateEnumCreating         GoogleCloudConnectorsV1ConnectionStatusStateEnum = "CREATING"
	GoogleCloudConnectorsV1ConnectionStatusStateEnumActive           GoogleCloudConnectorsV1ConnectionStatusStateEnum = "ACTIVE"
	GoogleCloudConnectorsV1ConnectionStatusStateEnumInactive         GoogleCloudConnectorsV1ConnectionStatusStateEnum = "INACTIVE"
	GoogleCloudConnectorsV1ConnectionStatusStateEnumDeleting         GoogleCloudConnectorsV1ConnectionStatusStateEnum = "DELETING"
	GoogleCloudConnectorsV1ConnectionStatusStateEnumUpdating         GoogleCloudConnectorsV1ConnectionStatusStateEnum = "UPDATING"
	GoogleCloudConnectorsV1ConnectionStatusStateEnumError            GoogleCloudConnectorsV1ConnectionStatusStateEnum = "ERROR"
)

type GoogleCloudConnectorsV1ConnectionStatus struct {
	Description *string                                           `json:"description,omitempty"`
	State       *GoogleCloudConnectorsV1ConnectionStatusStateEnum `json:"state,omitempty"`
	Status      *string                                           `json:"status,omitempty"`
}
