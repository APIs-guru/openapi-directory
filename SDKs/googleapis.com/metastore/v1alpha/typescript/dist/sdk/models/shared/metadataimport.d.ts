import { SpeakeasyBase } from "../../../internal/utils";
import { DatabaseDump } from "./databasedump";
export declare enum MetadataImportStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Updating = "UPDATING",
    Failed = "FAILED"
}
/**
 * A metastore resource that imports metadata.
**/
export declare class MetadataImport extends SpeakeasyBase {
    createTime?: string;
    databaseDump?: DatabaseDump;
    description?: string;
    endTime?: string;
    name?: string;
    state?: MetadataImportStateEnum;
    updateTime?: string;
}
/**
 * A metastore resource that imports metadata.
**/
export declare class MetadataImportInput extends SpeakeasyBase {
    databaseDump?: DatabaseDump;
    description?: string;
    name?: string;
}
