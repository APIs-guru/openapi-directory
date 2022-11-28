import { SpeakeasyBase } from "../../../internal/utils";
import { CloudSqlConnectionProfile } from "./cloudsqlconnectionprofile";
import { Status } from "./status";
import { MySqlConnectionProfile } from "./mysqlconnectionprofile";
import { CloudSqlConnectionProfileInput } from "./cloudsqlconnectionprofile";
import { MySqlConnectionProfileInput } from "./mysqlconnectionprofile";
export declare enum ConnectionProfileProviderEnum {
    DatabaseProviderUnspecified = "DATABASE_PROVIDER_UNSPECIFIED",
    Cloudsql = "CLOUDSQL",
    Rds = "RDS"
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
export declare class ConnectionProfile extends SpeakeasyBase {
    cloudsql?: CloudSqlConnectionProfile;
    createTime?: string;
    displayName?: string;
    error?: Status;
    labels?: Map<string, string>;
    mysql?: MySqlConnectionProfile;
    name?: string;
    provider?: ConnectionProfileProviderEnum;
    state?: ConnectionProfileStateEnum;
    updateTime?: string;
}
/**
 * A connection profile definition.
**/
export declare class ConnectionProfileInput extends SpeakeasyBase {
    cloudsql?: CloudSqlConnectionProfileInput;
    displayName?: string;
    error?: Status;
    labels?: Map<string, string>;
    mysql?: MySqlConnectionProfileInput;
    name?: string;
    provider?: ConnectionProfileProviderEnum;
    state?: ConnectionProfileStateEnum;
}
