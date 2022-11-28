import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec } from "./googleclouddatacatalogv1cloudsqlbigqueryconnectionspec";


export enum GoogleCloudDatacatalogV1BigQueryConnectionSpecConnectionTypeEnum {
    ConnectionTypeUnspecified = "CONNECTION_TYPE_UNSPECIFIED",
    CloudSql = "CLOUD_SQL"
}


// GoogleCloudDatacatalogV1BigQueryConnectionSpec
/** 
 * Specification for the BigQuery connection.
**/
export class GoogleCloudDatacatalogV1BigQueryConnectionSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudSql" })
  cloudSql?: GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec;

  @SpeakeasyMetadata({ data: "json, name=connectionType" })
  connectionType?: GoogleCloudDatacatalogV1BigQueryConnectionSpecConnectionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=hasCredential" })
  hasCredential?: boolean;
}
