package shared

// ClustersConfigDump
// Envoy's cluster manager fills this message with all currently known clusters. Cluster configuration information can be used to recreate an Envoy configuration by populating all clusters as static clusters or by returning them in a CDS response.
type ClustersConfigDump struct {
	DynamicActiveClusters  []DynamicCluster `json:"dynamicActiveClusters,omitempty"`
	DynamicWarmingClusters []DynamicCluster `json:"dynamicWarmingClusters,omitempty"`
	StaticClusters         []StaticCluster  `json:"staticClusters,omitempty"`
	VersionInfo            *string          `json:"versionInfo,omitempty"`
}
