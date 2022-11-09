import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum RestoreServiceRequestRestoreTypeEnum {
    RestoreTypeUnspecified = "RESTORE_TYPE_UNSPECIFIED",
    Full = "FULL",
    MetadataOnly = "METADATA_ONLY"
}
/**
 * Request message for DataprocMetastore.Restore.
**/
export declare class RestoreServiceRequest extends SpeakeasyBase {
    backup?: string;
    requestId?: string;
    restoreType?: RestoreServiceRequestRestoreTypeEnum;
}
