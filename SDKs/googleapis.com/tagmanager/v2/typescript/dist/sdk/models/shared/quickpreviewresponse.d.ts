import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerVersion } from "./containerversion";
import { SyncStatus } from "./syncstatus";
/**
 * Response to quick previewing a workspace.
**/
export declare class QuickPreviewResponse extends SpeakeasyBase {
    compilerError?: boolean;
    containerVersion?: ContainerVersion;
    syncStatus?: SyncStatus;
}
