import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum NfsExportOptionsAccessModeEnum {
    AccessModeUnspecified = "ACCESS_MODE_UNSPECIFIED",
    ReadOnly = "READ_ONLY",
    ReadWrite = "READ_WRITE"
}
export declare enum NfsExportOptionsSquashModeEnum {
    SquashModeUnspecified = "SQUASH_MODE_UNSPECIFIED",
    NoRootSquash = "NO_ROOT_SQUASH",
    RootSquash = "ROOT_SQUASH"
}
/**
 * NFS export options specifications.
**/
export declare class NfsExportOptions extends SpeakeasyBase {
    accessMode?: NfsExportOptionsAccessModeEnum;
    anonGid?: string;
    anonUid?: string;
    ipRanges?: string[];
    squashMode?: NfsExportOptionsSquashModeEnum;
}
