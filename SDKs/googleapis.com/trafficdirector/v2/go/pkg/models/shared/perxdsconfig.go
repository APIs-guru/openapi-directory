package shared

type PerXdsConfigStatusEnum string

const (
	PerXdsConfigStatusEnumUnknown PerXdsConfigStatusEnum = "UNKNOWN"
	PerXdsConfigStatusEnumSynced  PerXdsConfigStatusEnum = "SYNCED"
	PerXdsConfigStatusEnumNotSent PerXdsConfigStatusEnum = "NOT_SENT"
	PerXdsConfigStatusEnumStale   PerXdsConfigStatusEnum = "STALE"
	PerXdsConfigStatusEnumError   PerXdsConfigStatusEnum = "ERROR"
)

type PerXdsConfig struct {
	ClusterConfig     *ClustersConfigDump     `json:"clusterConfig,omitempty"`
	ListenerConfig    *ListenersConfigDump    `json:"listenerConfig,omitempty"`
	RouteConfig       *RoutesConfigDump       `json:"routeConfig,omitempty"`
	ScopedRouteConfig *ScopedRoutesConfigDump `json:"scopedRouteConfig,omitempty"`
	Status            *PerXdsConfigStatusEnum `json:"status,omitempty"`
}
