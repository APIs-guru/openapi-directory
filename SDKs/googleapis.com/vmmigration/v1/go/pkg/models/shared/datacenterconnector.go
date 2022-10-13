package shared

type DatacenterConnectorStateEnum string

const (
	DatacenterConnectorStateEnumStateUnspecified DatacenterConnectorStateEnum = "STATE_UNSPECIFIED"
	DatacenterConnectorStateEnumPending          DatacenterConnectorStateEnum = "PENDING"
	DatacenterConnectorStateEnumOffline          DatacenterConnectorStateEnum = "OFFLINE"
	DatacenterConnectorStateEnumFailed           DatacenterConnectorStateEnum = "FAILED"
	DatacenterConnectorStateEnumActive           DatacenterConnectorStateEnum = "ACTIVE"
)

type DatacenterConnector struct {
	ApplianceInfrastructureVersion *string                       `json:"applianceInfrastructureVersion"`
	ApplianceSoftwareVersion       *string                       `json:"applianceSoftwareVersion"`
	AvailableVersions              *AvailableUpdates             `json:"availableVersions"`
	Bucket                         *string                       `json:"bucket"`
	CreateTime                     *string                       `json:"createTime"`
	Error                          *Status                       `json:"error"`
	Name                           *string                       `json:"name"`
	RegistrationID                 *string                       `json:"registrationId"`
	ServiceAccount                 *string                       `json:"serviceAccount"`
	State                          *DatacenterConnectorStateEnum `json:"state"`
	StateTime                      *string                       `json:"stateTime"`
	UpdateTime                     *string                       `json:"updateTime"`
	UpgradeStatus                  *UpgradeStatus                `json:"upgradeStatus"`
	Version                        *string                       `json:"version"`
}
