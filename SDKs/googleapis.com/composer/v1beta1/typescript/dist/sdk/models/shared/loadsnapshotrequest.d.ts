import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Request to load a snapshot into a Cloud Composer environment.
**/
export declare class LoadSnapshotRequest extends SpeakeasyBase {
    skipPypiPackagesInstallation?: boolean;
    snapshotPath?: string;
}
