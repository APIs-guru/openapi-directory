import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum DatabaseInstanceStateEnum {
    LifecycleStateUnspecified = "LIFECYCLE_STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Disabled = "DISABLED",
    Deleted = "DELETED"
}
export declare enum DatabaseInstanceTypeEnum {
    DatabaseInstanceTypeUnspecified = "DATABASE_INSTANCE_TYPE_UNSPECIFIED",
    DefaultDatabase = "DEFAULT_DATABASE",
    UserDatabase = "USER_DATABASE"
}
/**
 * Representation of a Realtime Database instance. Details on interacting with contents of a DatabaseInstance can be found at: https://firebase.google.com/docs/database/rest/start.
**/
export declare class DatabaseInstance extends SpeakeasyBase {
    databaseUrl?: string;
    name?: string;
    project?: string;
    state?: DatabaseInstanceStateEnum;
    type?: DatabaseInstanceTypeEnum;
}
