package shared

type ClustersConfigDump struct {
	DynamicActiveClusters  []DynamicCluster `json:"dynamicActiveClusters,omitempty"`
	DynamicWarmingClusters []DynamicCluster `json:"dynamicWarmingClusters,omitempty"`
	StaticClusters         []StaticCluster  `json:"staticClusters,omitempty"`
	VersionInfo            *string          `json:"versionInfo,omitempty"`
}
