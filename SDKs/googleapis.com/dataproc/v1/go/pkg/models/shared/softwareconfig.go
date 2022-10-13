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
	SoftwareConfigOptionalComponentsEnumRanger               SoftwareConfigOptionalComponentsEnum = "RANGER"
	SoftwareConfigOptionalComponentsEnumSolr                 SoftwareConfigOptionalComponentsEnum = "SOLR"
	SoftwareConfigOptionalComponentsEnumZeppelin             SoftwareConfigOptionalComponentsEnum = "ZEPPELIN"
	SoftwareConfigOptionalComponentsEnumZookeeper            SoftwareConfigOptionalComponentsEnum = "ZOOKEEPER"
)

type SoftwareConfig struct {
	ImageVersion       *string                                `json:"imageVersion"`
	OptionalComponents []SoftwareConfigOptionalComponentsEnum `json:"optionalComponents"`
	Properties         map[string]string                      `json:"properties"`
}
