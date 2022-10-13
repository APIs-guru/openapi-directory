package shared

type InstanceMemcacheVersionEnum string

const (
	InstanceMemcacheVersionEnumMemcacheVersionUnspecified InstanceMemcacheVersionEnum = "MEMCACHE_VERSION_UNSPECIFIED"
	InstanceMemcacheVersionEnumMemcache15                 InstanceMemcacheVersionEnum = "MEMCACHE_1_5"
)

type InstanceStateEnum string

const (
	InstanceStateEnumStateUnspecified      InstanceStateEnum = "STATE_UNSPECIFIED"
	InstanceStateEnumCreating              InstanceStateEnum = "CREATING"
	InstanceStateEnumReady                 InstanceStateEnum = "READY"
	InstanceStateEnumUpdating              InstanceStateEnum = "UPDATING"
	InstanceStateEnumDeleting              InstanceStateEnum = "DELETING"
	InstanceStateEnumPerformingMaintenance InstanceStateEnum = "PERFORMING_MAINTENANCE"
)

type Instance struct {
	AuthorizedNetwork   *string                                      `json:"authorizedNetwork"`
	CreateTime          *string                                      `json:"createTime"`
	DiscoveryEndpoint   *string                                      `json:"discoveryEndpoint"`
	DisplayName         *string                                      `json:"displayName"`
	InstanceMessages    []InstanceMessage                            `json:"instanceMessages"`
	Labels              map[string]string                            `json:"labels"`
	MaintenancePolicy   *GoogleCloudMemcacheV1beta2MaintenancePolicy `json:"maintenancePolicy"`
	MaintenanceSchedule *MaintenanceSchedule                         `json:"maintenanceSchedule"`
	MemcacheFullVersion *string                                      `json:"memcacheFullVersion"`
	MemcacheNodes       []Node                                       `json:"memcacheNodes"`
	MemcacheVersion     *InstanceMemcacheVersionEnum                 `json:"memcacheVersion"`
	Name                *string                                      `json:"name"`
	NodeConfig          *NodeConfig                                  `json:"nodeConfig"`
	NodeCount           *int32                                       `json:"nodeCount"`
	Parameters          *MemcacheParameters                          `json:"parameters"`
	State               *InstanceStateEnum                           `json:"state"`
	UpdateAvailable     *bool                                        `json:"updateAvailable"`
	UpdateTime          *string                                      `json:"updateTime"`
	Zones               []string                                     `json:"zones"`
}
