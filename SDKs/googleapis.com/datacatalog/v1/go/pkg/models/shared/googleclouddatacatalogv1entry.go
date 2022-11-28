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

// GoogleCloudDatacatalogV1EntryInput
// Entry metadata. A Data Catalog entry represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic) or outside of it. You can use the `linked_resource` field in the entry resource to refer to the original resource ID of the source system. An entry resource contains resource details, for example, its schema. Additionally, you can attach flexible metadata to an entry in the form of a Tag.
type GoogleCloudDatacatalogV1EntryInput struct {
	BusinessContext          *GoogleCloudDatacatalogV1BusinessContext          `json:"businessContext,omitempty"`
	DataSource               *GoogleCloudDatacatalogV1DataSourceInput          `json:"dataSource,omitempty"`
	DataSourceConnectionSpec *GoogleCloudDatacatalogV1DataSourceConnectionSpec `json:"dataSourceConnectionSpec,omitempty"`
	DatabaseTableSpec        *GoogleCloudDatacatalogV1DatabaseTableSpec        `json:"databaseTableSpec,omitempty"`
	Description              *string                                           `json:"description,omitempty"`
	DisplayName              *string                                           `json:"displayName,omitempty"`
	FilesetSpec              *GoogleCloudDatacatalogV1FilesetSpec              `json:"filesetSpec,omitempty"`
	FullyQualifiedName       *string                                           `json:"fullyQualifiedName,omitempty"`
	GcsFilesetSpec           *GoogleCloudDatacatalogV1GcsFilesetSpecInput      `json:"gcsFilesetSpec,omitempty"`
	Labels                   map[string]string                                 `json:"labels,omitempty"`
	LinkedResource           *string                                           `json:"linkedResource,omitempty"`
	PersonalDetails          *GoogleCloudDatacatalogV1PersonalDetails          `json:"personalDetails,omitempty"`
	RoutineSpec              *GoogleCloudDatacatalogV1RoutineSpec              `json:"routineSpec,omitempty"`
	Schema                   *GoogleCloudDatacatalogV1Schema                   `json:"schema,omitempty"`
	SourceSystemTimestamps   *GoogleCloudDatacatalogV1SystemTimestampsInput    `json:"sourceSystemTimestamps,omitempty"`
	Type                     *GoogleCloudDatacatalogV1EntryTypeEnum            `json:"type,omitempty"`
	UsageSignal              *GoogleCloudDatacatalogV1UsageSignalInput         `json:"usageSignal,omitempty"`
	UserSpecifiedSystem      *string                                           `json:"userSpecifiedSystem,omitempty"`
	UserSpecifiedType        *string                                           `json:"userSpecifiedType,omitempty"`
}

// GoogleCloudDatacatalogV1Entry
// Entry metadata. A Data Catalog entry represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic) or outside of it. You can use the `linked_resource` field in the entry resource to refer to the original resource ID of the source system. An entry resource contains resource details, for example, its schema. Additionally, you can attach flexible metadata to an entry in the form of a Tag.
type GoogleCloudDatacatalogV1Entry struct {
	BigqueryDateShardedSpec  *GoogleCloudDatacatalogV1BigQueryDateShardedSpec   `json:"bigqueryDateShardedSpec,omitempty"`
	BigqueryTableSpec        *GoogleCloudDatacatalogV1BigQueryTableSpec         `json:"bigqueryTableSpec,omitempty"`
	BusinessContext          *GoogleCloudDatacatalogV1BusinessContext           `json:"businessContext,omitempty"`
	DataSource               *GoogleCloudDatacatalogV1DataSource                `json:"dataSource,omitempty"`
	DataSourceConnectionSpec *GoogleCloudDatacatalogV1DataSourceConnectionSpec  `json:"dataSourceConnectionSpec,omitempty"`
	DatabaseTableSpec        *GoogleCloudDatacatalogV1DatabaseTableSpec         `json:"databaseTableSpec,omitempty"`
	Description              *string                                            `json:"description,omitempty"`
	DisplayName              *string                                            `json:"displayName,omitempty"`
	FilesetSpec              *GoogleCloudDatacatalogV1FilesetSpec               `json:"filesetSpec,omitempty"`
	FullyQualifiedName       *string                                            `json:"fullyQualifiedName,omitempty"`
	GcsFilesetSpec           *GoogleCloudDatacatalogV1GcsFilesetSpec            `json:"gcsFilesetSpec,omitempty"`
	IntegratedSystem         *GoogleCloudDatacatalogV1EntryIntegratedSystemEnum `json:"integratedSystem,omitempty"`
	Labels                   map[string]string                                  `json:"labels,omitempty"`
	LinkedResource           *string                                            `json:"linkedResource,omitempty"`
	Name                     *string                                            `json:"name,omitempty"`
	PersonalDetails          *GoogleCloudDatacatalogV1PersonalDetails           `json:"personalDetails,omitempty"`
	RoutineSpec              *GoogleCloudDatacatalogV1RoutineSpec               `json:"routineSpec,omitempty"`
	Schema                   *GoogleCloudDatacatalogV1Schema                    `json:"schema,omitempty"`
	SourceSystemTimestamps   *GoogleCloudDatacatalogV1SystemTimestamps          `json:"sourceSystemTimestamps,omitempty"`
	Type                     *GoogleCloudDatacatalogV1EntryTypeEnum             `json:"type,omitempty"`
	UsageSignal              *GoogleCloudDatacatalogV1UsageSignal               `json:"usageSignal,omitempty"`
	UserSpecifiedSystem      *string                                            `json:"userSpecifiedSystem,omitempty"`
	UserSpecifiedType        *string                                            `json:"userSpecifiedType,omitempty"`
}
