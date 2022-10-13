package shared

type GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum string

const (
	GoogleCloudDatacatalogV1DataplexExternalTableSystemEnumIntegratedSystemUnspecified GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum = "INTEGRATED_SYSTEM_UNSPECIFIED"
	GoogleCloudDatacatalogV1DataplexExternalTableSystemEnumBigquery                    GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum = "BIGQUERY"
	GoogleCloudDatacatalogV1DataplexExternalTableSystemEnumCloudPubsub                 GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum = "CLOUD_PUBSUB"
	GoogleCloudDatacatalogV1DataplexExternalTableSystemEnumDataprocMetastore           GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum = "DATAPROC_METASTORE"
	GoogleCloudDatacatalogV1DataplexExternalTableSystemEnumDataplex                    GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum = "DATAPLEX"
)

type GoogleCloudDatacatalogV1DataplexExternalTable struct {
	DataCatalogEntry    *string                                                  `json:"dataCatalogEntry"`
	FullyQualifiedName  *string                                                  `json:"fullyQualifiedName"`
	GoogleCloudResource *string                                                  `json:"googleCloudResource"`
	System              *GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum `json:"system"`
}
