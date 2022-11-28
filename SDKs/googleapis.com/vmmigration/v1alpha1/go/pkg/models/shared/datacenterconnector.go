package shared

type DatacenterConnectorStateEnum string

const (
	DatacenterConnectorStateEnumStateUnspecified DatacenterConnectorStateEnum = "STATE_UNSPECIFIED"
	DatacenterConnectorStateEnumPending          DatacenterConnectorStateEnum = "PENDING"
	DatacenterConnectorStateEnumOffline          DatacenterConnectorStateEnum = "OFFLINE"
	DatacenterConnectorStateEnumFailed           DatacenterConnectorStateEnum = "FAILED"
	DatacenterConnectorStateEnumActive           DatacenterConnectorStateEnum = "ACTIVE"
)

// DatacenterConnectorInput
// DatacenterConnector message describes a connector between the Source and GCP, which is installed on a vmware datacenter (an OVA vm installed by the user) to connect the Datacenter to GCP and support vm migration data transfer.
type DatacenterConnectorInput struct {
	AvailableVersions *AvailableUpdates `json:"availableVersions,omitempty"`
	Error             *Status           `json:"error,omitempty"`
	RegistrationID    *string           `json:"registrationId,omitempty"`
	ServiceAccount    *string           `json:"serviceAccount,omitempty"`
	UpgradeStatus     *UpgradeStatus    `json:"upgradeStatus,omitempty"`
	Version           *string           `json:"version,omitempty"`
}

// DatacenterConnector
// DatacenterConnector message describes a connector between the Source and GCP, which is installed on a vmware datacenter (an OVA vm installed by the user) to connect the Datacenter to GCP and support vm migration data transfer.
type DatacenterConnector struct {
	ApplianceInfrastructureVersion *string                       `json:"applianceInfrastructureVersion,omitempty"`
	ApplianceSoftwareVersion       *string                       `json:"applianceSoftwareVersion,omitempty"`
	AvailableVersions              *AvailableUpdates             `json:"availableVersions,omitempty"`
	Bucket                         *string                       `json:"bucket,omitempty"`
	CreateTime                     *string                       `json:"createTime,omitempty"`
	Error                          *Status                       `json:"error,omitempty"`
	Name                           *string                       `json:"name,omitempty"`
	RegistrationID                 *string                       `json:"registrationId,omitempty"`
	ServiceAccount                 *string                       `json:"serviceAccount,omitempty"`
	State                          *DatacenterConnectorStateEnum `json:"state,omitempty"`
	StateTime                      *string                       `json:"stateTime,omitempty"`
	UpdateTime                     *string                       `json:"updateTime,omitempty"`
	UpgradeStatus                  *UpgradeStatus                `json:"upgradeStatus,omitempty"`
	Version                        *string                       `json:"version,omitempty"`
}
