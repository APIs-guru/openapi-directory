package shared

type GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum string

const (
	GoogleCloudDatacatalogV1DataplexExternalTableSystemEnumIntegratedSystemUnspecified GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum = "INTEGRATED_SYSTEM_UNSPECIFIED"
	GoogleCloudDatacatalogV1DataplexExternalTableSystemEnumBigquery                    GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum = "BIGQUERY"
	GoogleCloudDatacatalogV1DataplexExternalTableSystemEnumCloudPubsub                 GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum = "CLOUD_PUBSUB"
	GoogleCloudDatacatalogV1DataplexExternalTableSystemEnumDataprocMetastore           GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum = "DATAPROC_METASTORE"
	GoogleCloudDatacatalogV1DataplexExternalTableSystemEnumDataplex                    GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum = "DATAPLEX"
)

// GoogleCloudDatacatalogV1DataplexExternalTable
// External table registered by Dataplex. Dataplex publishes data discovered from an asset into multiple other systems (BigQuery, DPMS) in form of tables. We call them "external tables". External tables are also synced into the Data Catalog. This message contains pointers to those external tables (fully qualified name, resource name et cetera) within the Data Catalog.
type GoogleCloudDatacatalogV1DataplexExternalTable struct {
	DataCatalogEntry    *string                                                  `json:"dataCatalogEntry,omitempty"`
	FullyQualifiedName  *string                                                  `json:"fullyQualifiedName,omitempty"`
	GoogleCloudResource *string                                                  `json:"googleCloudResource,omitempty"`
	System              *GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum `json:"system,omitempty"`
}
