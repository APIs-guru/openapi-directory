package shared

type OnPremClusterClusterTypeEnum string

const (
	OnPremClusterClusterTypeEnumClustertypeUnspecified OnPremClusterClusterTypeEnum = "CLUSTERTYPE_UNSPECIFIED"
	OnPremClusterClusterTypeEnumBootstrap              OnPremClusterClusterTypeEnum = "BOOTSTRAP"
	OnPremClusterClusterTypeEnumHybrid                 OnPremClusterClusterTypeEnum = "HYBRID"
	OnPremClusterClusterTypeEnumStandalone             OnPremClusterClusterTypeEnum = "STANDALONE"
	OnPremClusterClusterTypeEnumUser                   OnPremClusterClusterTypeEnum = "USER"
)

type OnPremCluster struct {
	AdminCluster   *bool                         `json:"adminCluster"`
	ClusterMissing *bool                         `json:"clusterMissing"`
	ClusterType    *OnPremClusterClusterTypeEnum `json:"clusterType"`
	ResourceLink   *string                       `json:"resourceLink"`
}
