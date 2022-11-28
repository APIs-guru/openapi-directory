import { SpeakeasyBase } from "../../../internal/utils";
import { AlloyDbConnectionProfileInput } from "./alloydbconnectionprofile";
import { CloudSqlConnectionProfileInput } from "./cloudsqlconnectionprofile";
import { Status } from "./status";
import { MySqlConnectionProfileInput } from "./mysqlconnectionprofile";
import { PostgreSqlConnectionProfileInput } from "./postgresqlconnectionprofile";
import { AlloyDbConnectionProfile } from "./alloydbconnectionprofile";
import { CloudSqlConnectionProfile } from "./cloudsqlconnectionprofile";
import { MySqlConnectionProfile } from "./mysqlconnectionprofile";
import { PostgreSqlConnectionProfile } from "./postgresqlconnectionprofile";
export declare enum ConnectionProfileProviderEnum {
    DatabaseProviderUnspecified = "DATABASE_PROVIDER_UNSPECIFIED",
    Cloudsql = "CLOUDSQL",
    Rds = "RDS",
    Aurora = "AURORA",
    Alloydb = "ALLOYDB"
}
export declare enum ConnectionProfileStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Draft = "DRAFT",
    Creating = "CREATING",
    Ready = "READY",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED"
}
/**
 * A connection profile definition.
**/
export declare class ConnectionProfileInput extends SpeakeasyBase {
    alloydb?: AlloyDbConnectionProfileInput;
    cloudsql?: CloudSqlConnectionProfileInput;
    displayName?: string;
    error?: Status;
    labels?: Map<string, string>;
    mysql?: MySqlConnectionProfileInput;
    name?: string;
    postgresql?: PostgreSqlConnectionProfileInput;
    provider?: ConnectionProfileProviderEnum;
    state?: ConnectionProfileStateEnum;
}
/**
 * A connection profile definition.
**/
export declare class ConnectionProfile extends SpeakeasyBase {
    alloydb?: AlloyDbConnectionProfile;
    cloudsql?: CloudSqlConnectionProfile;
    createTime?: string;
    displayName?: string;
    error?: Status;
    labels?: Map<string, string>;
    mysql?: MySqlConnectionProfile;
    name?: string;
    postgresql?: PostgreSqlConnectionProfile;
    provider?: ConnectionProfileProviderEnum;
    state?: ConnectionProfileStateEnum;
    updateTime?: string;
}
