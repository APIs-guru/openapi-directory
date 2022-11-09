import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpecTypeEnum {
    DatabaseTypeUnspecified = "DATABASE_TYPE_UNSPECIFIED"
,    Postgres = "POSTGRES"
,    Mysql = "MYSQL"
}


// GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec
/** 
 * Specification for the BigQuery connection to a Cloud SQL instance.
**/
export class GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=database" })
  database?: string;

  @Metadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpecTypeEnum;
}
