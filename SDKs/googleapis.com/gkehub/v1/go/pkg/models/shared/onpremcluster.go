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
	AdminCluster   *bool                         `json:"adminCluster,omitempty"`
	ClusterMissing *bool                         `json:"clusterMissing,omitempty"`
	ClusterType    *OnPremClusterClusterTypeEnum `json:"clusterType,omitempty"`
	ResourceLink   *string                       `json:"resourceLink,omitempty"`
}
