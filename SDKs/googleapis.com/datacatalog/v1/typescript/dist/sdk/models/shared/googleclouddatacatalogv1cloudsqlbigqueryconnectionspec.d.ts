import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpecTypeEnum {
    DatabaseTypeUnspecified = "DATABASE_TYPE_UNSPECIFIED",
    Postgres = "POSTGRES",
    Mysql = "MYSQL"
}
/**
 * Specification for the BigQuery connection to a Cloud SQL instance.
**/
export declare class GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec extends SpeakeasyBase {
    database?: string;
    instanceId?: string;
    type?: GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpecTypeEnum;
}
