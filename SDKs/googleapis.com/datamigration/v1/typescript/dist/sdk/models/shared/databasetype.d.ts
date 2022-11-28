import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DatabaseTypeEngineEnum {
    DatabaseEngineUnspecified = "DATABASE_ENGINE_UNSPECIFIED",
    Mysql = "MYSQL",
    Postgresql = "POSTGRESQL"
}
export declare enum DatabaseTypeProviderEnum {
    DatabaseProviderUnspecified = "DATABASE_PROVIDER_UNSPECIFIED",
    Cloudsql = "CLOUDSQL",
    Rds = "RDS",
    Aurora = "AURORA",
    Alloydb = "ALLOYDB"
}
/**
 * A message defining the database engine and provider.
**/
export declare class DatabaseType extends SpeakeasyBase {
    engine?: DatabaseTypeEngineEnum;
    provider?: DatabaseTypeProviderEnum;
}
