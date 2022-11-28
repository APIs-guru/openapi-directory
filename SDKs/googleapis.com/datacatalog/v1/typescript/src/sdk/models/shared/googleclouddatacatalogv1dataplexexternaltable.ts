import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum {
    IntegratedSystemUnspecified = "INTEGRATED_SYSTEM_UNSPECIFIED",
    Bigquery = "BIGQUERY",
    CloudPubsub = "CLOUD_PUBSUB",
    DataprocMetastore = "DATAPROC_METASTORE",
    Dataplex = "DATAPLEX"
}


// GoogleCloudDatacatalogV1DataplexExternalTable
/** 
 * External table registered by Dataplex. Dataplex publishes data discovered from an asset into multiple other systems (BigQuery, DPMS) in form of tables. We call them "external tables". External tables are also synced into the Data Catalog. This message contains pointers to those external tables (fully qualified name, resource name et cetera) within the Data Catalog.
**/
export class GoogleCloudDatacatalogV1DataplexExternalTable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataCatalogEntry" })
  dataCatalogEntry?: string;

  @SpeakeasyMetadata({ data: "json, name=fullyQualifiedName" })
  fullyQualifiedName?: string;

  @SpeakeasyMetadata({ data: "json, name=googleCloudResource" })
  googleCloudResource?: string;

  @SpeakeasyMetadata({ data: "json, name=system" })
  system?: GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum;
}
