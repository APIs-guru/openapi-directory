package shared

type GoogleCloudDatacatalogV1EntryIntegratedSystemEnum string

const (
	GoogleCloudDatacatalogV1EntryIntegratedSystemEnumIntegratedSystemUnspecified GoogleCloudDatacatalogV1EntryIntegratedSystemEnum = "INTEGRATED_SYSTEM_UNSPECIFIED"
	GoogleCloudDatacatalogV1EntryIntegratedSystemEnumBigquery                    GoogleCloudDatacatalogV1EntryIntegratedSystemEnum = "BIGQUERY"
	GoogleCloudDatacatalogV1EntryIntegratedSystemEnumCloudPubsub                 GoogleCloudDatacatalogV1EntryIntegratedSystemEnum = "CLOUD_PUBSUB"
	GoogleCloudDatacatalogV1EntryIntegratedSystemEnumDataprocMetastore           GoogleCloudDatacatalogV1EntryIntegratedSystemEnum = "DATAPROC_METASTORE"
	GoogleCloudDatacatalogV1EntryIntegratedSystemEnumDataplex                    GoogleCloudDatacatalogV1EntryIntegratedSystemEnum = "DATAPLEX"
)

type GoogleCloudDatacatalogV1EntryTypeEnum string

const (
	GoogleCloudDatacatalogV1EntryTypeEnumEntryTypeUnspecified GoogleCloudDatacatalogV1EntryTypeEnum = "ENTRY_TYPE_UNSPECIFIED"
	GoogleCloudDatacatalogV1EntryTypeEnumTable                GoogleCloudDatacatalogV1EntryTypeEnum = "TABLE"
	GoogleCloudDatacatalogV1EntryTypeEnumModel                GoogleCloudDatacatalogV1EntryTypeEnum = "MODEL"
	GoogleCloudDatacatalogV1EntryTypeEnumDataStream           GoogleCloudDatacatalogV1EntryTypeEnum = "DATA_STREAM"
	GoogleCloudDatacatalogV1EntryTypeEnumFileset              GoogleCloudDatacatalogV1EntryTypeEnum = "FILESET"
	GoogleCloudDatacatalogV1EntryTypeEnumCluster              GoogleCloudDatacatalogV1EntryTypeEnum = "CLUSTER"
	GoogleCloudDatacatalogV1EntryTypeEnumDatabase             GoogleCloudDatacatalogV1EntryTypeEnum = "DATABASE"
	GoogleCloudDatacatalogV1EntryTypeEnumDataSourceConnection GoogleCloudDatacatalogV1EntryTypeEnum = "DATA_SOURCE_CONNECTION"
	GoogleCloudDatacatalogV1EntryTypeEnumRoutine              GoogleCloudDatacatalogV1EntryTypeEnum = "ROUTINE"
	GoogleCloudDatacatalogV1EntryTypeEnumLake                 GoogleCloudDatacatalogV1EntryTypeEnum = "LAKE"
	GoogleCloudDatacatalogV1EntryTypeEnumZone                 GoogleCloudDatacatalogV1EntryTypeEnum = "ZONE"
	GoogleCloudDatacatalogV1EntryTypeEnumService              GoogleCloudDatacatalogV1EntryTypeEnum = "SERVICE"
)

type GoogleCloudDatacatalogV1Entry struct {
	BigqueryDateShardedSpec  *GoogleCloudDatacatalogV1BigQueryDateShardedSpec   `json:"bigqueryDateShardedSpec"`
	BigqueryTableSpec        *GoogleCloudDatacatalogV1BigQueryTableSpec         `json:"bigqueryTableSpec"`
	BusinessContext          *GoogleCloudDatacatalogV1BusinessContext           `json:"businessContext"`
	DataSource               *GoogleCloudDatacatalogV1DataSource                `json:"dataSource"`
	DataSourceConnectionSpec *GoogleCloudDatacatalogV1DataSourceConnectionSpec  `json:"dataSourceConnectionSpec"`
	DatabaseTableSpec        *GoogleCloudDatacatalogV1DatabaseTableSpec         `json:"databaseTableSpec"`
	Description              *string                                            `json:"description"`
	DisplayName              *string                                            `json:"displayName"`
	FilesetSpec              *GoogleCloudDatacatalogV1FilesetSpec               `json:"filesetSpec"`
	FullyQualifiedName       *string                                            `json:"fullyQualifiedName"`
	GcsFilesetSpec           *GoogleCloudDatacatalogV1GcsFilesetSpec            `json:"gcsFilesetSpec"`
	IntegratedSystem         *GoogleCloudDatacatalogV1EntryIntegratedSystemEnum `json:"integratedSystem"`
	Labels                   map[string]string                                  `json:"labels"`
	LinkedResource           *string                                            `json:"linkedResource"`
	Name                     *string                                            `json:"name"`
	PersonalDetails          *GoogleCloudDatacatalogV1PersonalDetails           `json:"personalDetails"`
	RoutineSpec              *GoogleCloudDatacatalogV1RoutineSpec               `json:"routineSpec"`
	Schema                   *GoogleCloudDatacatalogV1Schema                    `json:"schema"`
	SourceSystemTimestamps   *GoogleCloudDatacatalogV1SystemTimestamps          `json:"sourceSystemTimestamps"`
	Type                     *GoogleCloudDatacatalogV1EntryTypeEnum             `json:"type"`
	UsageSignal              *GoogleCloudDatacatalogV1UsageSignal               `json:"usageSignal"`
	UserSpecifiedSystem      *string                                            `json:"userSpecifiedSystem"`
	UserSpecifiedType        *string                                            `json:"userSpecifiedType"`
}
