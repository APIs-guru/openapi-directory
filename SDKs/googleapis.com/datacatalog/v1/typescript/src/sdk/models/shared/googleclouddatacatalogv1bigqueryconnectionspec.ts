import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec } from "./googleclouddatacatalogv1cloudsqlbigqueryconnectionspec";

export enum GoogleCloudDatacatalogV1BigQueryConnectionSpecConnectionTypeEnum {
    ConnectionTypeUnspecified = "CONNECTION_TYPE_UNSPECIFIED"
,    CloudSql = "CLOUD_SQL"
}


// GoogleCloudDatacatalogV1BigQueryConnectionSpec
/** 
 * Specification for the BigQuery connection.
**/
export class GoogleCloudDatacatalogV1BigQueryConnectionSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudSql" })
  cloudSql?: GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec;

  @Metadata({ data: "json, name=connectionType" })
  connectionType?: GoogleCloudDatacatalogV1BigQueryConnectionSpecConnectionTypeEnum;

  @Metadata({ data: "json, name=hasCredential" })
  hasCredential?: boolean;
}
