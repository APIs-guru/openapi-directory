package shared

type ClustersConfigDump struct {
	DynamicActiveClusters  []DynamicCluster `json:"dynamicActiveClusters"`
	DynamicWarmingClusters []DynamicCluster `json:"dynamicWarmingClusters"`
	StaticClusters         []StaticCluster  `json:"staticClusters"`
	VersionInfo            *string          `json:"versionInfo"`
}
