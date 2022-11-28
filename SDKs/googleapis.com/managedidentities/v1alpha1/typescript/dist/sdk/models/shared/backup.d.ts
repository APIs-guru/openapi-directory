import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BackupStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Failed = "FAILED",
    Deleting = "DELETING"
}
export declare enum BackupTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    OnDemand = "ON_DEMAND",
    Scheduled = "SCHEDULED",
    SchemaExtension = "SCHEMA_EXTENSION"
}
/**
 * Represents a Managed Microsoft Identities backup.
**/
export declare class Backup extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    labels?: Map<string, string>;
    name?: string;
    state?: BackupStateEnum;
    statusMessage?: string;
    type?: BackupTypeEnum;
    updateTime?: string;
}
/**
 * Represents a Managed Microsoft Identities backup.
**/
export declare class BackupInput extends SpeakeasyBase {
    description?: string;
    labels?: Map<string, string>;
}
