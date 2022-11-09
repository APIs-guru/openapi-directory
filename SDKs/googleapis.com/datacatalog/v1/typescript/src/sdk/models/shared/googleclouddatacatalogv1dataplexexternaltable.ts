import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum {
    IntegratedSystemUnspecified = "INTEGRATED_SYSTEM_UNSPECIFIED"
,    Bigquery = "BIGQUERY"
,    CloudPubsub = "CLOUD_PUBSUB"
,    DataprocMetastore = "DATAPROC_METASTORE"
,    Dataplex = "DATAPLEX"
}


// GoogleCloudDatacatalogV1DataplexExternalTable
/** 
 * External table registered by Dataplex. Dataplex publishes data discovered from an asset into multiple other systems (BigQuery, DPMS) in form of tables. We call them "external tables". External tables are also synced into the Data Catalog. This message contains pointers to those external tables (fully qualified name, resource name et cetera) within the Data Catalog.
**/
export class GoogleCloudDatacatalogV1DataplexExternalTable extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataCatalogEntry" })
  dataCatalogEntry?: string;

  @Metadata({ data: "json, name=fullyQualifiedName" })
  fullyQualifiedName?: string;

  @Metadata({ data: "json, name=googleCloudResource" })
  googleCloudResource?: string;

  @Metadata({ data: "json, name=system" })
  system?: GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum;
}
