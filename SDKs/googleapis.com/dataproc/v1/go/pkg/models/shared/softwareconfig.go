package shared

type SoftwareConfigOptionalComponentsEnum string

const (
	SoftwareConfigOptionalComponentsEnumComponentUnspecified SoftwareConfigOptionalComponentsEnum = "COMPONENT_UNSPECIFIED"
	SoftwareConfigOptionalComponentsEnumAnaconda             SoftwareConfigOptionalComponentsEnum = "ANACONDA"
	SoftwareConfigOptionalComponentsEnumDocker               SoftwareConfigOptionalComponentsEnum = "DOCKER"
	SoftwareConfigOptionalComponentsEnumDruid                SoftwareConfigOptionalComponentsEnum = "DRUID"
	SoftwareConfigOptionalComponentsEnumFlink                SoftwareConfigOptionalComponentsEnum = "FLINK"
	SoftwareConfigOptionalComponentsEnumHbase                SoftwareConfigOptionalComponentsEnum = "HBASE"
	SoftwareConfigOptionalComponentsEnumHiveWebhcat          SoftwareConfigOptionalComponentsEnum = "HIVE_WEBHCAT"
	SoftwareConfigOptionalComponentsEnumJupyter              SoftwareConfigOptionalComponentsEnum = "JUPYTER"
	SoftwareConfigOptionalComponentsEnumPresto               SoftwareConfigOptionalComponentsEnum = "PRESTO"
	SoftwareConfigOptionalComponentsEnumTrino                SoftwareConfigOptionalComponentsEnum = "TRINO"
	SoftwareConfigOptionalComponentsEnumRanger               SoftwareConfigOptionalComponentsEnum = "RANGER"
	SoftwareConfigOptionalComponentsEnumSolr                 SoftwareConfigOptionalComponentsEnum = "SOLR"
	SoftwareConfigOptionalComponentsEnumZeppelin             SoftwareConfigOptionalComponentsEnum = "ZEPPELIN"
	SoftwareConfigOptionalComponentsEnumZookeeper            SoftwareConfigOptionalComponentsEnum = "ZOOKEEPER"
)

// SoftwareConfig
// Specifies the selection and config of software inside the cluster.
type SoftwareConfig struct {
	ImageVersion       *string                                `json:"imageVersion,omitempty"`
	OptionalComponents []SoftwareConfigOptionalComponentsEnum `json:"optionalComponents,omitempty"`
	Properties         map[string]string                      `json:"properties,omitempty"`
}
