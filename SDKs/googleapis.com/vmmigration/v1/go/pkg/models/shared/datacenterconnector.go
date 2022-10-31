package shared




type DatacenterConnectorStateEnum string

const (
    DatacenterConnectorStateEnumStateUnspecified DatacenterConnectorStateEnum = "STATE_UNSPECIFIED"
DatacenterConnectorStateEnumPending DatacenterConnectorStateEnum = "PENDING"
DatacenterConnectorStateEnumOffline DatacenterConnectorStateEnum = "OFFLINE"
DatacenterConnectorStateEnumFailed DatacenterConnectorStateEnum = "FAILED"
DatacenterConnectorStateEnumActive DatacenterConnectorStateEnum = "ACTIVE"
)


type DatacenterConnector struct {
    ApplianceInfrastructureVersion *string `json:"applianceInfrastructureVersion,omitempty"`
    ApplianceSoftwareVersion *string `json:"applianceSoftwareVersion,omitempty"`
    AvailableVersions *AvailableUpdates `json:"availableVersions,omitempty"`
    Bucket *string `json:"bucket,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    Error *Status `json:"error,omitempty"`
    Name *string `json:"name,omitempty"`
    RegistrationID *string `json:"registrationId,omitempty"`
    ServiceAccount *string `json:"serviceAccount,omitempty"`
    State *DatacenterConnectorStateEnum `json:"state,omitempty"`
    StateTime *string `json:"stateTime,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    UpgradeStatus *UpgradeStatus `json:"upgradeStatus,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

