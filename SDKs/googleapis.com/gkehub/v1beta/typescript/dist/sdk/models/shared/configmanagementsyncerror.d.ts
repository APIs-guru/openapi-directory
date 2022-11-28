import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigManagementErrorResource } from "./configmanagementerrorresource";
/**
 * An ACM created error representing a problem syncing configurations
**/
export declare class ConfigManagementSyncError extends SpeakeasyBase {
    code?: string;
    errorMessage?: string;
    errorResources?: ConfigManagementErrorResource[];
}
