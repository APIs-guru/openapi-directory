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
	ClusterConfig     *ClustersConfigDump     `json:"clusterConfig"`
	ListenerConfig    *ListenersConfigDump    `json:"listenerConfig"`
	RouteConfig       *RoutesConfigDump       `json:"routeConfig"`
	ScopedRouteConfig *ScopedRoutesConfigDump `json:"scopedRouteConfig"`
	Status            *PerXdsConfigStatusEnum `json:"status"`
}
