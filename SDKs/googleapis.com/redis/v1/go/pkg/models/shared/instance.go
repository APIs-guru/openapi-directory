package shared




type InstanceConnectModeEnum string

const (
    InstanceConnectModeEnumConnectModeUnspecified InstanceConnectModeEnum = "CONNECT_MODE_UNSPECIFIED"
InstanceConnectModeEnumDirectPeering InstanceConnectModeEnum = "DIRECT_PEERING"
InstanceConnectModeEnumPrivateServiceAccess InstanceConnectModeEnum = "PRIVATE_SERVICE_ACCESS"
)



type InstanceReadReplicasModeEnum string

const (
    InstanceReadReplicasModeEnumReadReplicasModeUnspecified InstanceReadReplicasModeEnum = "READ_REPLICAS_MODE_UNSPECIFIED"
InstanceReadReplicasModeEnumReadReplicasDisabled InstanceReadReplicasModeEnum = "READ_REPLICAS_DISABLED"
InstanceReadReplicasModeEnumReadReplicasEnabled InstanceReadReplicasModeEnum = "READ_REPLICAS_ENABLED"
)



type InstanceStateEnum string

const (
    InstanceStateEnumStateUnspecified InstanceStateEnum = "STATE_UNSPECIFIED"
InstanceStateEnumCreating InstanceStateEnum = "CREATING"
InstanceStateEnumReady InstanceStateEnum = "READY"
InstanceStateEnumUpdating InstanceStateEnum = "UPDATING"
InstanceStateEnumDeleting InstanceStateEnum = "DELETING"
InstanceStateEnumRepairing InstanceStateEnum = "REPAIRING"
InstanceStateEnumMaintenance InstanceStateEnum = "MAINTENANCE"
InstanceStateEnumImporting InstanceStateEnum = "IMPORTING"
InstanceStateEnumFailingOver InstanceStateEnum = "FAILING_OVER"
)



type InstanceSuspensionReasonsEnum string

const (
    InstanceSuspensionReasonsEnumSuspensionReasonUnspecified InstanceSuspensionReasonsEnum = "SUSPENSION_REASON_UNSPECIFIED"
InstanceSuspensionReasonsEnumCustomerManagedKeyIssue InstanceSuspensionReasonsEnum = "CUSTOMER_MANAGED_KEY_ISSUE"
)



type InstanceTierEnum string

const (
    InstanceTierEnumTierUnspecified InstanceTierEnum = "TIER_UNSPECIFIED"
InstanceTierEnumBasic InstanceTierEnum = "BASIC"
InstanceTierEnumStandardHa InstanceTierEnum = "STANDARD_HA"
)



type InstanceTransitEncryptionModeEnum string

const (
    InstanceTransitEncryptionModeEnumTransitEncryptionModeUnspecified InstanceTransitEncryptionModeEnum = "TRANSIT_ENCRYPTION_MODE_UNSPECIFIED"
InstanceTransitEncryptionModeEnumServerAuthentication InstanceTransitEncryptionModeEnum = "SERVER_AUTHENTICATION"
InstanceTransitEncryptionModeEnumDisabled InstanceTransitEncryptionModeEnum = "DISABLED"
)


type Instance struct {
    AlternativeLocationID *string `json:"alternativeLocationId,omitempty"`
    AuthEnabled *bool `json:"authEnabled,omitempty"`
    AuthorizedNetwork *string `json:"authorizedNetwork,omitempty"`
    ConnectMode *InstanceConnectModeEnum `json:"connectMode,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    CurrentLocationID *string `json:"currentLocationId,omitempty"`
    CustomerManagedKey *string `json:"customerManagedKey,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Host *string `json:"host,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    LocationID *string `json:"locationId,omitempty"`
    MaintenancePolicy *MaintenancePolicy `json:"maintenancePolicy,omitempty"`
    MaintenanceSchedule *MaintenanceSchedule `json:"maintenanceSchedule,omitempty"`
    MemorySizeGb *int32 `json:"memorySizeGb,omitempty"`
    Name *string `json:"name,omitempty"`
    Nodes []NodeInfo `json:"nodes,omitempty"`
    PersistenceConfig *PersistenceConfig `json:"persistenceConfig,omitempty"`
    PersistenceIamIdentity *string `json:"persistenceIamIdentity,omitempty"`
    Port *int32 `json:"port,omitempty"`
    ReadEndpoint *string `json:"readEndpoint,omitempty"`
    ReadEndpointPort *int32 `json:"readEndpointPort,omitempty"`
    ReadReplicasMode *InstanceReadReplicasModeEnum `json:"readReplicasMode,omitempty"`
    RedisConfigs map[string]string `json:"redisConfigs,omitempty"`
    RedisVersion *string `json:"redisVersion,omitempty"`
    ReplicaCount *int32 `json:"replicaCount,omitempty"`
    ReservedIPRange *string `json:"reservedIpRange,omitempty"`
    SecondaryIPRange *string `json:"secondaryIpRange,omitempty"`
    ServerCaCerts []TLSCertificate `json:"serverCaCerts,omitempty"`
    State *InstanceStateEnum `json:"state,omitempty"`
    StatusMessage *string `json:"statusMessage,omitempty"`
    SuspensionReasons []InstanceSuspensionReasonsEnum `json:"suspensionReasons,omitempty"`
    Tier *InstanceTierEnum `json:"tier,omitempty"`
    TransitEncryptionMode *InstanceTransitEncryptionModeEnum `json:"transitEncryptionMode,omitempty"`
    
}

