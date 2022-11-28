import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum {
    IntegratedSystemUnspecified = "INTEGRATED_SYSTEM_UNSPECIFIED",
    Bigquery = "BIGQUERY",
    CloudPubsub = "CLOUD_PUBSUB",
    DataprocMetastore = "DATAPROC_METASTORE",
    Dataplex = "DATAPLEX"
}
/**
 * External table registered by Dataplex. Dataplex publishes data discovered from an asset into multiple other systems (BigQuery, DPMS) in form of tables. We call them "external tables". External tables are also synced into the Data Catalog. This message contains pointers to those external tables (fully qualified name, resource name et cetera) within the Data Catalog.
**/
export declare class GoogleCloudDatacatalogV1DataplexExternalTable extends SpeakeasyBase {
    dataCatalogEntry?: string;
    fullyQualifiedName?: string;
    googleCloudResource?: string;
    system?: GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum;
}
