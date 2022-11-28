import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DatabaseTypeEngineEnum {
    DatabaseEngineUnspecified = "DATABASE_ENGINE_UNSPECIFIED",
    Mysql = "MYSQL"
}
export declare enum DatabaseTypeProviderEnum {
    DatabaseProviderUnspecified = "DATABASE_PROVIDER_UNSPECIFIED",
    Cloudsql = "CLOUDSQL",
    Rds = "RDS"
}
/**
 * A message defining the database engine and provider.
**/
export declare class DatabaseType extends SpeakeasyBase {
    engine?: DatabaseTypeEngineEnum;
    provider?: DatabaseTypeProviderEnum;
}
