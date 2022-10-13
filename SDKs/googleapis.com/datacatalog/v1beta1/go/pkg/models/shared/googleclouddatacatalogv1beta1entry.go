package shared

type GoogleCloudDatacatalogV1beta1EntryIntegratedSystemEnum string

const (
	GoogleCloudDatacatalogV1beta1EntryIntegratedSystemEnumIntegratedSystemUnspecified GoogleCloudDatacatalogV1beta1EntryIntegratedSystemEnum = "INTEGRATED_SYSTEM_UNSPECIFIED"
	GoogleCloudDatacatalogV1beta1EntryIntegratedSystemEnumBigquery                    GoogleCloudDatacatalogV1beta1EntryIntegratedSystemEnum = "BIGQUERY"
	GoogleCloudDatacatalogV1beta1EntryIntegratedSystemEnumCloudPubsub                 GoogleCloudDatacatalogV1beta1EntryIntegratedSystemEnum = "CLOUD_PUBSUB"
)

type GoogleCloudDatacatalogV1beta1EntryTypeEnum string

const (
	GoogleCloudDatacatalogV1beta1EntryTypeEnumEntryTypeUnspecified GoogleCloudDatacatalogV1beta1EntryTypeEnum = "ENTRY_TYPE_UNSPECIFIED"
	GoogleCloudDatacatalogV1beta1EntryTypeEnumTable                GoogleCloudDatacatalogV1beta1EntryTypeEnum = "TABLE"
	GoogleCloudDatacatalogV1beta1EntryTypeEnumModel                GoogleCloudDatacatalogV1beta1EntryTypeEnum = "MODEL"
	GoogleCloudDatacatalogV1beta1EntryTypeEnumDataStream           GoogleCloudDatacatalogV1beta1EntryTypeEnum = "DATA_STREAM"
	GoogleCloudDatacatalogV1beta1EntryTypeEnumFileset              GoogleCloudDatacatalogV1beta1EntryTypeEnum = "FILESET"
)

type GoogleCloudDatacatalogV1beta1Entry struct {
	BigqueryDateShardedSpec *GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec   `json:"bigqueryDateShardedSpec"`
	BigqueryTableSpec       *GoogleCloudDatacatalogV1beta1BigQueryTableSpec         `json:"bigqueryTableSpec"`
	Description             *string                                                 `json:"description"`
	DisplayName             *string                                                 `json:"displayName"`
	GcsFilesetSpec          *GoogleCloudDatacatalogV1beta1GcsFilesetSpec            `json:"gcsFilesetSpec"`
	IntegratedSystem        *GoogleCloudDatacatalogV1beta1EntryIntegratedSystemEnum `json:"integratedSystem"`
	LinkedResource          *string                                                 `json:"linkedResource"`
	Name                    *string                                                 `json:"name"`
	Schema                  *GoogleCloudDatacatalogV1beta1Schema                    `json:"schema"`
	SourceSystemTimestamps  *GoogleCloudDatacatalogV1beta1SystemTimestamps          `json:"sourceSystemTimestamps"`
	Type                    *GoogleCloudDatacatalogV1beta1EntryTypeEnum             `json:"type"`
	UsageSignal             *GoogleCloudDatacatalogV1beta1UsageSignal               `json:"usageSignal"`
	UserSpecifiedSystem     *string                                                 `json:"userSpecifiedSystem"`
	UserSpecifiedType       *string                                                 `json:"userSpecifiedType"`
}
