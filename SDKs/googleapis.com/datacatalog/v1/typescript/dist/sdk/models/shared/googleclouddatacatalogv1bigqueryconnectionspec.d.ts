import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec } from "./googleclouddatacatalogv1cloudsqlbigqueryconnectionspec";
export declare enum GoogleCloudDatacatalogV1BigQueryConnectionSpecConnectionTypeEnum {
    ConnectionTypeUnspecified = "CONNECTION_TYPE_UNSPECIFIED",
    CloudSql = "CLOUD_SQL"
}
/**
 * Specification for the BigQuery connection.
**/
export declare class GoogleCloudDatacatalogV1BigQueryConnectionSpec extends SpeakeasyBase {
    cloudSql?: GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec;
    connectionType?: GoogleCloudDatacatalogV1BigQueryConnectionSpecConnectionTypeEnum;
    hasCredential?: boolean;
}
