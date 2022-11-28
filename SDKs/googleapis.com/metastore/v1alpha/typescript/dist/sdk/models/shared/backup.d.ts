import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceInput } from "./service";
import { Service } from "./service";
export declare enum BackupStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Deleting = "DELETING",
    Active = "ACTIVE",
    Failed = "FAILED",
    Restoring = "RESTORING"
}
/**
 * The details of a backup resource.
**/
export declare class BackupInput extends SpeakeasyBase {
    description?: string;
    name?: string;
    serviceRevision?: ServiceInput;
}
/**
 * The details of a backup resource.
**/
export declare class Backup extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    endTime?: string;
    name?: string;
    restoringServices?: string[];
    serviceRevision?: Service;
    state?: BackupStateEnum;
}
