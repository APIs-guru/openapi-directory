import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DatabaseTypeEngineEnum {
    DatabaseEngineUnspecified = "DATABASE_ENGINE_UNSPECIFIED",
    Mysql = "MYSQL"
}

export enum DatabaseTypeProviderEnum {
    DatabaseProviderUnspecified = "DATABASE_PROVIDER_UNSPECIFIED",
    Cloudsql = "CLOUDSQL",
    Rds = "RDS"
}


// DatabaseType
/** 
 * A message defining the database engine and provider.
**/
export class DatabaseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=engine" })
  engine?: DatabaseTypeEngineEnum;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: DatabaseTypeProviderEnum;
}
