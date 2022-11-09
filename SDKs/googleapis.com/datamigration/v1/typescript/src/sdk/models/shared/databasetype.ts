import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DatabaseTypeEngineEnum {
    DatabaseEngineUnspecified = "DATABASE_ENGINE_UNSPECIFIED"
,    Mysql = "MYSQL"
,    Postgresql = "POSTGRESQL"
}

export enum DatabaseTypeProviderEnum {
    DatabaseProviderUnspecified = "DATABASE_PROVIDER_UNSPECIFIED"
,    Cloudsql = "CLOUDSQL"
,    Rds = "RDS"
,    Aurora = "AURORA"
,    Alloydb = "ALLOYDB"
}


// DatabaseType
/** 
 * A message defining the database engine and provider.
**/
export class DatabaseType extends SpeakeasyBase {
  @Metadata({ data: "json, name=engine" })
  engine?: DatabaseTypeEngineEnum;

  @Metadata({ data: "json, name=provider" })
  provider?: DatabaseTypeProviderEnum;
}
