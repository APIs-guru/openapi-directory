package shared




type InstanceMemcacheVersionEnum string

const (
    InstanceMemcacheVersionEnumMemcacheVersionUnspecified InstanceMemcacheVersionEnum = "MEMCACHE_VERSION_UNSPECIFIED"
InstanceMemcacheVersionEnumMemcache15 InstanceMemcacheVersionEnum = "MEMCACHE_1_5"
)



type InstanceStateEnum string

const (
    InstanceStateEnumStateUnspecified InstanceStateEnum = "STATE_UNSPECIFIED"
InstanceStateEnumCreating InstanceStateEnum = "CREATING"
InstanceStateEnumReady InstanceStateEnum = "READY"
InstanceStateEnumUpdating InstanceStateEnum = "UPDATING"
InstanceStateEnumDeleting InstanceStateEnum = "DELETING"
InstanceStateEnumPerformingMaintenance InstanceStateEnum = "PERFORMING_MAINTENANCE"
)


type Instance struct {
    AuthorizedNetwork *string `json:"authorizedNetwork,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    DiscoveryEndpoint *string `json:"discoveryEndpoint,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    InstanceMessages []InstanceMessage `json:"instanceMessages,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    MaintenancePolicy *GoogleCloudMemcacheV1MaintenancePolicy `json:"maintenancePolicy,omitempty"`
    MaintenanceSchedule *MaintenanceSchedule `json:"maintenanceSchedule,omitempty"`
    MemcacheFullVersion *string `json:"memcacheFullVersion,omitempty"`
    MemcacheNodes []Node `json:"memcacheNodes,omitempty"`
    MemcacheVersion *InstanceMemcacheVersionEnum `json:"memcacheVersion,omitempty"`
    Name *string `json:"name,omitempty"`
    NodeConfig *NodeConfig `json:"nodeConfig,omitempty"`
    NodeCount *int32 `json:"nodeCount,omitempty"`
    Parameters *MemcacheParameters `json:"parameters,omitempty"`
    State *InstanceStateEnum `json:"state,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    Zones []string `json:"zones,omitempty"`
    
}

