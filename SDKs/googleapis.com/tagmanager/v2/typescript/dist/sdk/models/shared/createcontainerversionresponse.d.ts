import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerVersion } from "./containerversion";
import { SyncStatus } from "./syncstatus";
/**
 * Create container versions response.
**/
export declare class CreateContainerVersionResponse extends SpeakeasyBase {
    compilerError?: boolean;
    containerVersion?: ContainerVersion;
    newWorkspacePath?: string;
    syncStatus?: SyncStatus;
}
