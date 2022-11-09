import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum RestoreStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Cancelled = "CANCELLED"
}
export declare enum RestoreTypeEnum {
    RestoreTypeUnspecified = "RESTORE_TYPE_UNSPECIFIED",
    Full = "FULL",
    MetadataOnly = "METADATA_ONLY"
}
/**
 * The details of a metadata restore operation.
**/
export declare class Restore extends SpeakeasyBase {
    backup?: string;
    details?: string;
    endTime?: string;
    startTime?: string;
    state?: RestoreStateEnum;
    type?: RestoreTypeEnum;
}
